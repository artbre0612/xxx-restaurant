import { defineStore } from 'pinia'
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '@/js/firebase'

export const useStoreAuth = defineStore('storeAuth', () => {
  // user data
  const userData = ref(JSON.parse(localStorage.getItem('userData')) || { id: '', email: '' })

  /* auto fire when login & logout state change */
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // login--save user data
      userData.value.id = user.uid
      userData.value.email = user.email
      // localStorage is to Refresh-proof your Pinia Stores
      localStorage.setItem('userData', JSON.stringify(userData.value))
    } else {
      //logout--clear user data
      localStorage.removeItem('userData')
      userData.value = { id: '', email: '' }
    }
  })

  /* login */
  function loginUser(formState) {
    signInWithEmailAndPassword(auth, formState.email, formState.password)
      .then(() => {
        this.router.push({ name: 'pos' })
      })
      .catch((error) => {
        console.log('errorMessage', error.message)
        alert('帳號或密碼不正確，請再試一次')
      })
  }

  /* log out */
  function logoutUser() {
    signOut(auth)
      .then(() => {
        this.router.push({ name: 'menu' })
      })
      .catch((error) => {
        console.log('errorMessage', error.message)
      })
  }

  return { loginUser, logoutUser, userData }
})

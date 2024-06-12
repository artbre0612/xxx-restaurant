import { defineStore } from 'pinia'
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '@/js/firebase'
import { message } from 'ant-design-vue'

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
        message.success(`嗨! ${formState.email}，您已成功登入`, 2)
        this.router.push({ name: 'pos' })
      })
      .catch((error) => {
        console.log('errorMessage', error.message)
        message.error('電子郵件或密碼不正確，請再試一次', 2)
      })
  }

  /* log out */
  function logoutUser() {
    signOut(auth)
      .then(() => {
        message.success('您已成功登出', 1)
        this.router.push({ name: 'menu' })
      })
      .catch((error) => {
        console.log('errorMessage', error.message)
      })
  }

  return { loginUser, logoutUser, userData }
})

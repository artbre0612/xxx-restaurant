import { defineStore } from 'pinia'
import { ref } from 'vue'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/js/firebase'

export const useStoreMenu = defineStore('storeMenu', () => {
  // firestore menu資料來源
  const menuCollectionRef = collection(db, 'menu')

  const menu = ref([])

  // get menu data
  async function getMenu() {
    const querySnapshot = await getDocs(menuCollectionRef)
    querySnapshot.forEach((doc) => {
      let dbMenu = {
        id: doc.data().id,
        dish: doc.data().dish,
        price: doc.data().price,
        quantity: doc.data().quantity
      }
      menu.value = [dbMenu, ...menu.value]
    })
  }

  return {
    getMenu,
    menu
  }
})

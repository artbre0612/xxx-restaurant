import { defineStore } from 'pinia'
import { ref } from 'vue'
import { doc, setDoc, collection, onSnapshot } from 'firebase/firestore'
import { db } from '@/js/firebase'

export const useStoreOrders = defineStore('storeOrders', () => {
  // firestore orders資料來源
  const ordersCollectionRef = collection(db, 'orders')

  // send order data
  async function sendOrder(cart, totalPrice) {
    // Add a new document in collection "orders"
    await setDoc(doc(ordersCollectionRef), {
      order: { cart, totalPrice }
    })
  }

  const orders = ref([])

  // 即時更新order
  onSnapshot(ordersCollectionRef, (querySnapshot) => {
    let dbOrders = []
    querySnapshot.forEach((doc) => {
      let order = {
        id: doc.id,
        orders: doc.data().order,
        totalPrice: doc.data().order.totalPrice
      }
      dbOrders = [order, ...dbOrders]
    })
    orders.value = dbOrders
  })

  return {
    sendOrder,
    orders
  }
})

import {  collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import Loading from './Loading'

const ItemListContainer = () => {

  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const {id} = useParams();

    useEffect(() => {
      const db = getFirestore()
      const itemsCollection = collection(db, "items")
      const filter = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection
      getDocs(filter).then((snapShot) => {
        setItems(snapShot.docs.map((doc) => ({id:doc.id, ...doc.data()})))
        setLoading(false)
      })
    }, [id])

  return (
    <main className='container py-5'>
      {loading ? <Loading /> : <ItemList items={items} />}
    </main>
  )
}

export default ItemListContainer
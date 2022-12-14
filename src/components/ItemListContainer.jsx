import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import arrayProductos from "./json/arrayProductos.json"

const ItemListContainer = () => {

  const [items, setItems] = useState([])
  const {id} = useParams();

  useEffect(() => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(id ? arrayProductos.filter(item => item.categoria === id) : arrayProductos)
      }, 2000)
    })

    promise.then((data) => {
      console.log(data)
      setItems(data)
    })
    
  }, [id])

  return (
    <main className='container py-5'>
          <ItemList items={items} />
    </main>
  )
}

export default ItemListContainer
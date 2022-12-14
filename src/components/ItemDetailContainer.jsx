import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import arrayProductos from "./json/arrayProductos.json"

const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const {id} = useParams();

    useEffect(() => {
        const promise = new Promise((resolve) => {
                setTimeout(() => {
                resolve(arrayProductos.find(item => item.id === parseInt(id)))
                }, 2000)
            })
        
            promise.then((data) => {
                setItem(data)
            })
    }, [id])

  return (
    <div className="container">
        <ItemDetail item={item} />
    </div>
  )
}

export default ItemDetailContainer
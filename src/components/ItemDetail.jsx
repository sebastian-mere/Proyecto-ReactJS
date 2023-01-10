import React, { useContext } from 'react'
import { CartContext } from './context/CartContext'
import ItemCount from './ItemCount'

const ItemDetail = ({item}) => {

  const {addItem} = useContext(CartContext)

  const onAdd = (cantidad) => {
    addItem(item, cantidad)
  }

  return (
    <div className="row py-5">
        <div className="col-12 col-md-6">
            <img src={item.imagen} alt={item.nombre} />
        </div>
        <div className="col-12 col-md-6">
            <h1>{item.nombre}</h1>
            <p>{item.descripcion}</p>
            <p>${item.precio}</p>
            <ItemCount stock={item.stock} onAdd={onAdd} />
        </div>
    </div>
  )
}

export default ItemDetail
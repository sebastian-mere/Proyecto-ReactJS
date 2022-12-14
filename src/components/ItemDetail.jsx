import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({item}) => {
  return (
    <div className="row py-5">
        <div className="col-12 col-md-6">
            <img src={item.imagen} alt={item.nombre} />
        </div>
        <div className="col-12 col-md-6">
            <h1>{item.nombre}</h1>
            <p>{item.descripcion}</p>
            <p>${item.precio}</p>
            <ItemCount stockItems={item.stock} />
        </div>
    </div>
  )
}

export default ItemDetail
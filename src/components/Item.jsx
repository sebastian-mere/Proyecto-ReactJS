import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({item}) => {
  return (
    
    <div className="card">
        <img className="card-img-top" src={item.imagen} alt={item.nombre}/>
        <div className="card-body text-center">
            <h5 className="card-title">{item.nombre}</h5>
            <Link to={"/item/" + item.id} className="btn btn-primary">Lo quiero!</Link>
        </div>
    </div>
  )
}

export default Item
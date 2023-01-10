import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './context/CartContext'

const CartWidget = () => {

  const {cartTotal} = useContext(CartContext)

  return (
    <Link to={"/cart"} className="btn btn-primary position-relative cart">
      <img className='cartIcon' src={"/img/cart3.svg"} alt={"Icono Carrito"} srcSet="" />
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {cartTotal()}
        <span className="visually-hidden">unread messages</span>
      </span>
    </Link>
  )
}

export default CartWidget
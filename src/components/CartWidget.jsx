import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './context/CartContext'

const CartWidget = () => {

  const {cartTotal} = useContext(CartContext)

  return cartTotal() === 0 ? null : (
    <Link to={"/cart"} className="btn btn-primary position-relative cart" title="Ver carrito">
      <img className='cartIcon' src={"/img/cart3.svg"} alt={"Icono Carrito"} srcSet="" />
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {cartTotal()}
      </span>
    </Link>
  )
}

export default CartWidget
import React from 'react'

const CartWidget = () => {
  return (
    <button type="button" className="btn btn-primary position-relative cart">
      <img className='cartIcon' src={"/img/cart3.svg"} alt={"Icono Carrito"} srcset="" />
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        2
        <span className="visually-hidden">unread messages</span>
      </span>
    </button>
  )
}

export default CartWidget
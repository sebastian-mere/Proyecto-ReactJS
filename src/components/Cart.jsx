import React, { useContext } from 'react'
import { CartContext } from './context/CartContext'
import { Link } from 'react-router-dom'

const Cart = () => {

    const {cart, removeItem, clear, priceTotal} = useContext(CartContext)

    return (
    <div className='container py-5'>
        <div className="row justify-content-md-center">
            <div className="col col-lg-8">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col" className='text-end' colSpan={5}><Link onClick={clear} className="btn btn-primary cart text-end" title="Vaciar carrito">Vaciar carrito</Link></th>
                        </tr>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Producto</th>
                            <th scope="col" className='text-center'>Cantidad</th>
                            <th scope="col" className='text-center'>Precio</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map(item => (
                            <tr key={item.id}>
                                <td><img src={item.imagen} alt={item.nombre} width={32}/></td>
                                <td className='align-middle'>{item.nombre}</td>
                                <td className='text-center align-middle'>{item.cantidad}</td>
                                <td className='text-center align-middle'>${item.cantidad * item.precio}</td>
                                <td className='text-end align-middle'><Link onClick={() => {removeItem(item.id)}} title="Eliminar item"><img src={"img/trash3.svg"} alt={"Eliminar"} width={24}/></Link></td>
                            </tr>
                        ))}
                        <tr>
                            <td colSpan={2}></td>
                            <td className='text-center align-middle'><b>Suma Total</b></td>
                            <td className='text-center align-middle'><b>${priceTotal()}</b></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Cart
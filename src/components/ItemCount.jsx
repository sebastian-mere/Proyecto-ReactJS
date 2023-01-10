import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ItemCount = ({stock, onAdd}) => {

    const [counter, setCounter] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [vendido, setVendido] = useState(false);

    const addStock = () => {
        if (counter < itemStock){
            setCounter (counter + 1);
        }
    }

    const subtractStock = () => {
        if (counter > 1){
            setCounter (counter - 1);
        }
    }

    const addToCart = (cantidad) => {
        setItemStock(itemStock - cantidad)
        setVendido(true)
        setCounter(1)
        onAdd(cantidad)
    }

    useEffect(() => {
        setItemStock(stock)
    }, [stock])

  return (
        <div className='row'>
            <div className='col-12 col-md-3'>
                <div className="input-group input-spinner mb-3">
                    <button className="form-control border-primary text-center">{counter}</button>
                    <button className="btn btn-icon btn-primary" type="button" onClick={subtractStock}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#fff" viewBox="0 0 24 24">
                            <path d="M19 13H5v-2h14v2z"></path>
                        </svg>
                    </button>
                    <button className="btn btn-icon btn-primary" type="button" onClick={addStock}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#fff" viewBox="0 0 24 24">
                            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                        </svg>
                    </button>
                </div>
            </div>
           <div className='row'>
             <div className='col-12 col-md-4'>
                {vendido ? <Link to={"/cart"} className="btn btn-primary px-4">Terminar mi compra</Link> : <button type="button" className="btn btn-primary px-4" onClick={() => {addToCart(counter)}}>Agregar al carrito</button>}
             </div>
           </div>
        </div>
  )
}

export default ItemCount
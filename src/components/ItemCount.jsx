import React from 'react'
import { useState } from "react"

const ItemCount = ({stockItems}) => {

    const [counter, setCounter] = useState(1);

    const [stock, setStock] = useState(stockItems);

    const addStock = () => {
        if (counter < stock){
            setCounter (counter + 1);
        }
    }

    const subtractStock = () => {
        if (counter > 1){
            setCounter (counter - 1);
        }
    }

    const onAdd = () => {
        if ((stock > 0) && (counter < stock))
        console.log("Agregaste: " + counter + " productos al carrito!")
        setStock(stock - counter)
        setCounter(0)
    }

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
                <button type="button" className="btn btn-primary px-4" onClick={onAdd}>Agregar al carrito</button>
             </div>
           </div>
        </div>
  )
}

export default ItemCount
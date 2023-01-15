import React from 'react'
import { Link, useParams } from 'react-router-dom'

const ThankYou = () => {

    const {id} = useParams()

    return (
            <div className='container py-5'>
                <div className="row justify-content-md-center">
                    <div className="col col-lg-8 text-center">
                       <h1>Gracias por tu compra</h1>
                       <p>Tu número de compra es: <b>{id}</b></p>
                       <Link to={"/"} className="btn btn-primary cart">Volver al inicio</Link>
                    </div>
                </div>
            </div>
    )
}

export default ThankYou
import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className="p-5 text-center hero">
                    <h1 className="mb-3">¿Conocés nuestra línea Micro Vintage?</h1>
                    <Link to={"/category/micro-vintage"} className="btn cart" role="button">¡Quiero ver!</Link>
                </div>
            </div>
        </div>
    )
}

export default Hero
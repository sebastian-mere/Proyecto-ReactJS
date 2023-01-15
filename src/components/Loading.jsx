import React from 'react'

const Loading = () => {
  return (
            <div className='container py-5'>
                <div className="row justify-content-md-center">
                    <div className="col col-lg-8 text-center">
                        <div className="spinner-border text-secondary" role="status">
                            <span className="visually-hidden">Cargando...</span>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default Loading
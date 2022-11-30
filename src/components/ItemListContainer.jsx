import React from 'react'

const ItemListContainer = ({greeting}) => {
  return (
    <main className='container py-5 min-vh-100'>
        <div className='row'>
            <div className='col-md-12 text-center'>
                <p>{greeting}</p>
            </div>
        </div>
    </main>
  )
}

export default ItemListContainer
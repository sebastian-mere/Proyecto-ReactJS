import { addDoc, collection, getFirestore } from 'firebase/firestore'
import React, { useContext, useState } from 'react'
import { CartContext } from './context/CartContext'

const Checkout = () => {
    const { cart, clear, priceTotal } = useContext(CartContext)

    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [provincia, setProvincia] = useState("")
    const [telefono, setTelefono] = useState("")
    const [orderId, setOrderId] = useState("")

    const [errors, setErrors] = useState({nombre: "", email: "", provincia: "", telefono: ""})

    const validate = () => {
        let newErrors = {nombre: "", email: "", provincia: "", telefono: ""}

        if (!nombre) {
            newErrors.nombre = "El nombre es obligatorio"
        }

        if (!email) {
            newErrors.email = "El email es obligatorio"
        } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            newErrors.email = "El email no es válido"
        }

        if (!provincia) {
            newErrors.provincia = "La provincia es obligatoria"
        }

        if (!telefono) {
            newErrors.telefono = "El teléfono es obligatorio"
        } else if (!/^\d{10,}$/.test(telefono)) {
            newErrors.telefono = "El teléfono debe tener 10 dígitos"
        }

        setErrors(newErrors)

        return Object.values(newErrors).every(err => !err)
    }

    const generarOrden = () => {
        if (validate()) {
            const fecha = new Date()
        const order = {
            date: fecha,
            buyer: {name:nombre, email:email, state:provincia, phone:telefono},
            items: cart.map(item => ({id:item.id, title:item.nombre, price:item.precio, quantity:item.cantidad, total_price:item.cantidad * item.precio})),
            total: priceTotal()
        }

        const db = getFirestore()
        const ordersCollection = collection(db, "orders")
        addDoc(ordersCollection, order).then((snapshot) => {
            setOrderId(snapshot.id)
            clear()
        })
        }
    }


    return (
        <div className="container">
            <div className="row py-4">
                <div className="col">
                    <table className="table">
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.imagen} alt={item.nombre} width={32} /></td>
                                    <td className='align-middle'>{item.nombre}</td>
                                    <td className='text-center align-middle'>{item.cantidad}</td>
                                    <td className='text-center align-middle'>${item.cantidad * item.precio}</td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={3} className='text-center align-middle'><b>Total a pagar</b></td>
                                <td className='text-center align-middle'><b>${priceTotal()}</b></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col">
                    <form>
                        <div className="form-group row py-2">
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Nombre" id="nombre" onInput={(e) => {setNombre(e.target.value)}}/>
                            </div>
                            <div className="text-warning small">{errors.nombre}</div>
                        </div>
                        <div className="form-group row py-2">
                            <div className="col">
                                <input type="email" className="form-control" placeholder="Email" id="email" onInput={(e) => {setEmail(e.target.value)}}/>
                            </div>
                            <div className="text-warning small">{errors.email}</div>
                        </div>
                        <div className="form-group row py-2">
                            <div className="col">
                                <select className="form-select" aria-label="Selección provincia" id="provincia" onInput={(e) => {setProvincia(e.target.value)}}>
                                    <option value="" defaultValue={"Lugar de residencia"}>Lugar de residencia</option>
                                    <option value="buenos aires">Buenos Aires</option>
                                    <option value="catamarca">Catamarca</option>
                                    <option value="chaco">Chaco</option>
                                    <option value="chubut">Chubut</option>
                                    <option value="cordoba">Córdoba</option>
                                    <option value="corrientes">Corrientes</option>
                                    <option value="ciudad de buenos aires">Ciudad de Buenos Aires</option>
                                    <option value="entre rios">Entre Ríos</option>
                                    <option value="formosa">Formosa</option>
                                    <option value="jujuy">Jujuy</option>
                                    <option value="la pampa">La Pampa</option>
                                    <option value="la rioja">La Rioja</option>
                                    <option value="mendoza">Mendoza</option>
                                    <option value="misiones">Misiones</option>
                                    <option value="neuquen">Neuquén</option>
                                    <option value="rio negro">Río Negro</option>
                                    <option value="salta">Salta</option>
                                    <option value="san juan">San Juan</option>
                                    <option value="san luis">San Luis</option>
                                    <option value="santa cruz">Santa Cruz</option>
                                    <option value="santa fe">Santa Fé</option>
                                    <option value="santiago del estero">Santiago del Estero</option>
                                    <option value="tierra del fuego">Tierra del Fuego</option>
                                    <option value="tucuman">Tucuman</option>
                                </select>
                            </div>
                            <div className="text-warning small">{errors.provincia}</div>
                        </div>
                        <div className="form-group row py-2">
                            <div className="col">
                                <input type="number" className="form-control" placeholder="Teléfono" id="telefono" onInput={(e) => {setTelefono(e.target.value)}}/>
                            </div>
                            <div className="text-warning small">{errors.telefono}</div>
                        </div>
                        <div className="col py-4">
                            <button type="button" className="btn btn-lg cart w-100" onClick={generarOrden}>Generar orden</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="row my-5">
                {orderId ? <p>Tu numero de orden es: {orderId}</p> : ""}
            </div>
        </div>
    )
}

export default Checkout
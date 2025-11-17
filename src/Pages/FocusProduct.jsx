import { Link, useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import { Ring } from 'ldrs/react'
import 'ldrs/react/Ring.css'

export default function FocusProduct() {

    let { id } = useParams()

    const navigate = useNavigate()

    const [product, setProduct] = useState({ rating: {} })
    const [isLoading, setIsLoading] = useState(true)

    const back = Number(id) - 1
    const forward = Number(id) + 1



    function handleGet() {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res => {
                setIsLoading(true)
                setProduct(res.data)
                if (res.data === '') {
                    navigate('/products')
                }
            })
            .catch(err => {
                navigate('/products')

                if (err.status === 404) {
                    navigate('/error_page')

                }
            })
            .finally(onfinally => {
                setIsLoading(false)
            })
    }

    useEffect(handleGet, [id])


    return (
        <>
            <div className="container">

                {
                    (isLoading === true) &&
                    <div className="d-flex justify-content-center vh-100">
                        <Ring size="40" stroke="5" bgOpacity="0" speed="2" color="black" className="mx-auto" />
                    </div>
                }

                <h1 className="my-4">{product.title}</h1>

                <div className="card mb-3 h-100">
                    <div className="row g-0 h-100">
                        <div className="col-6 d-flex align-items-center p-5">
                            <img src={product.image} className="img-fluid rounded-start" alt={product.title} />
                        </div>
                        <div className="col-6">
                            <div className="card-body p-3 h-100 d-flex flex-column justify-content-center">
                                <h5 className="card-title text-primary fs-1">{product.title}</h5>
                                <h6 className="card-subtitle mb-2 text-body-secondary fs-3">{product.category}</h6>
                                <p className="card-text">{product.description}</p>
                                <h5 className="card-title text-success fs-3">€ {product.price}</h5>
                                <p className="card-text">Rating: <span className="text-warning fw-bold">{product.rating.rate}</span></p>
                                <p className="card-text">Count: <span className="text-warning fw-bold">{product.rating.count}</span></p>
                                <Link to='/products' className="btn btn-primary w-50">Torna alla pagina dei prodotti</Link>
                                <Link to={`/products/${back}`} className="btn btn-dark w-50 my-3">Prodotto precedente</Link>
                                <Link to={`/products/${forward}`} className="btn btn-dark w-50">Prodotto successivo</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
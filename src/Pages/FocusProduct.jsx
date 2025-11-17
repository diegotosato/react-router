import { Link, useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

export default function FocusProduct() {

    const { id } = useParams()
    const navigate = useNavigate()
    const [product, setProduct] = useState({ rating: {} })

    function handleGet() {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res => {
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
    }

    useEffect(handleGet, [id])
    console.log(product.rating);


    return (
        <>
            <div className="container">

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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
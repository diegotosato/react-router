import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

export default function FocusProduct() {

    const { id } = useParams()
    const [product, setProduct] = useState([])

    function handleGet() {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res => {
                setProduct(res.data)
            })
    }

    useEffect(handleGet, [])
    console.log(product.rating);


    return (
        <>
            <div className="container">
                <div className="card mb-3 h-100">
                    <div className="row g-0 h-100">
                        <div className="col-5 d-flex align-items-center p-5">
                            <img src={product.image} className="img-fluid rounded-start" alt={product.title} />
                        </div>
                        <div className="col-7 h-100">
                            <div className="card-body p-3 h-100 d-flex flex-column justify-content-center">
                                <h5 className="card-title text-primary">{product.title}</h5>
                                <h6 className="card-subtitle mb-2 text-body-secondary">{product.category}</h6>
                                <p className="card-text">{product.description}</p>
                                <h5 className="card-title text-success">€ {product.price}</h5>
                                <p className="card-text">Rating: <span className="text-warning fw-bold">{product.rating.rate}</span></p>
                                {/* <p className="card-text">Count: <span className="text-warning fw-bold">{product.rating.count}</span></p> */}
                            </div>
                        </div>
                    </div>
                </div>
                <Link to='/products' className="btn btn-primary">Torna alla pagina dei prodotti</Link>
            </div>
        </>
    )
}
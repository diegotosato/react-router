import axios from "axios"
import { useState, useEffect } from "react"

export default function Products() {
    const productsEndpoint = 'https://fakestoreapi.com/products'

    const [products, setProducts] = useState([])

    function handleGet() {
        axios.get(productsEndpoint)
            .then(res => setProducts(res.data))
    }

    useEffect(handleGet, [])
    console.log(products);


    return (
        <>
            <h1>Prodotti</h1>
            {
                products.map(product => (
                    <div key={product.id} className="card">

                        <div className="card-image">
                            <img src={product.image} alt={product.title} />
                        </div>

                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary">{product.category}</h6>
                            <p className="card-text">{product.description}</p>
                            <h5 className="card-title">€ {product.price}</h5>
                            <p className="card-text">
                                <span>Rating: {product.rating.rate}</span>
                                <span>Count: {product.rating.count}</span>
                            </p>
                        </div>

                    </div>
                ))
            }


        </>
    )
}
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


            <div className="card">
                <div className="card-image">
                    <img src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png' alt="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops" />
                </div>
                <div className="card-body">
                    <h5 className="card-title">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">men's clothing</h6>
                    <p className="card-text">
                        Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday
                    </p>
                    <h5 className="card-title">€ 109.95</h5>
                    <p className="card-text">
                        Rating: 3.9
                        Count: 120
                    </p>

                </div>
            </div>
        </>
    )
}
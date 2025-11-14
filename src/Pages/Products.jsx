import axios from "axios"
import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"

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


            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <div className="container">
                    <ul className="navbar-nav me-auto mt-2 mt-lg-0">

                        <li className="nav-item">
                            <NavLink className="nav-link" to={'/'}>Home Page</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={'/products'}>Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={'/about_us'}>About Us</NavLink>
                        </li>
                    </ul>


                </div>
            </nav>

            <h1>Prodotti</h1>
            <div className="container">

                <div className="row row-cols-4 g-3">

                    {
                        products.map(product => (
                            <div key={product.id} className="col">
                                <div className="card h-100">

                                    <div className="card-image">
                                        <img className="card-img-top" src={product.image} alt={product.title} />
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
                            </div>
                        ))
                    }

                </div>

            </div>

        </>
    )
}
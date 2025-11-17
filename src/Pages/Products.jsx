import axios from "axios"
import { useState, useEffect } from "react"
import Card from '../Components/Card'
import { useNavigate } from "react-router-dom"

export default function Products() {
    const productsEndpoint = 'https://fakestoreapi.com/products'

    const [products, setProducts] = useState([])

    const navigate = useNavigate()

    function handleGet() {
        axios.get(productsEndpoint)
            .then(res => {
                setProducts(res.data)
            })
            .catch(err => {
                navigate('/error_page')

                if (err.status === 404) {
                    navigate('/error_page')

                }
            })
    }

    useEffect(handleGet, [])
    console.log(products);


    return (
        <>

            <div className="container">

                <h1 className="my-4">Prodotti</h1>

                <div className="row row-cols-1 row-cols-sm-1 row-cols-xl-2 g-5">

                    {
                        products.map((product, index) => (
                            <div key={index} className="col">
                                <Card product={product} />
                            </div>
                        ))
                    }

                </div>

            </div>

        </>
    )
}
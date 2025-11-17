import axios from "axios"
import { useState, useEffect } from "react"
import Card from '../Components/Card'
import { useNavigate } from "react-router-dom"
import { Ring } from 'ldrs/react'
import 'ldrs/react/Ring.css'

export default function Products() {
    const productsEndpoint = 'https://fakestoreapi.com/products'

    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const navigate = useNavigate()

    function handleGet() {
        axios.get(productsEndpoint)
            .then(res => {
                setIsLoading(true)
                setProducts(res.data)
                console.log(res.data);

            })
            .catch(err => {
                navigate('/error_page')

                if (err.status === 404) {
                    navigate('/error_page')

                }
            })
            .finally(onfinally => {
                setIsLoading(false)
            })
    }

    useEffect(handleGet, [])


    return (
        <>


            <div className="container">

                {
                    (isLoading === true) &&
                    <div className="d-flex justify-content-center vh-100 mt-5">
                        <Ring size="40" stroke="5" bgOpacity="0" speed="2" color="black" className="mx-auto" />
                    </div>
                }

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
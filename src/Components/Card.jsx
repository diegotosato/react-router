import { Link } from "react-router-dom"

export default function Card({ product }) {
    return (
        <>
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
                            <p className="card-text">Count: <span className="text-warning fw-bold">{product.rating.count}</span></p>
                            <Link to={`/products/${product.id}`}>Visualizza prodotto</Link>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
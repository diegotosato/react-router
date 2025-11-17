export default function Card({ product }) {
    return (
        <>
            {/* <div className="card h-100">

                <div className="card-image p-3">
                    <img className="card-img-top" src={product.image} alt={product.title} />
                </div>

                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{product.category}</h6>
                    <p className="card-text">{product.description}</p>
                    <h5 className="card-title">€ {product.price}</h5>
                    <p className="card-text">Rating: {product.rating.rate}</p>
                    <p className="card-text">Count: {product.rating.count}</p>
                </div>

            </div> */}

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
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
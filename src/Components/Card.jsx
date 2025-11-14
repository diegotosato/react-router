export default function Card({ product }) {
    return (
        <>
            <div className="card h-100">

                <div className="card-image">
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

            </div>
        </>
    )
}
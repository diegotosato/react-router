import { Link } from "react-router-dom"

export default function FocusProduct() {
    return (
        <>
            <h1>Focus prodotto</h1>
            <Link to='/products' className="btn btn-primary">Torna alla pagina dei prodotti</Link>
        </>
    )
}
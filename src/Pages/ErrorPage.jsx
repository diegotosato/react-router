import { Link } from "react-router-dom"


export default function ErrorPage() {
    return (
        <>
            <div className="container text-center">
                <h1>Error 404 page not found!</h1>
                <Link to='/' className="btn btn-primary w-50">Torna alla Home Page</Link>
            </div>
        </>
    )
}
import { NavLink } from "react-router-dom"

export default function Header() {
    return (
        <>
            <header>
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
            </header>
        </>
    )
}
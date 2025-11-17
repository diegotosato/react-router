import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from './Pages/HomePage'
import Products from './Pages/Products'
import AboutUs from './Pages/AboutUs'
import DefaultLayout from "./Layout/DefaultLayout"
import FocusProduct from "./Pages/FocusProduct"
import ErrorPage from "./Pages/ErrorPage"

function App() {

  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route element={<DefaultLayout />}>

            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<FocusProduct />} />
            <Route path="/about_us" element={<AboutUs />} />

          </Route>
          <Route path="/error_page" element={<ErrorPage />} />

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App

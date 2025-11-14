import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from './Pages/HomePage'
import Products from './Pages/Products'
import AboutUs from './Pages/AboutUs'
import DefaultLayout from "./Layout/DefaultLayout"

function App() {

  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route element={<DefaultLayout />}>

            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about_us" element={<AboutUs />} />

          </Route>

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App

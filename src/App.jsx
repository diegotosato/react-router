import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from './Pages/HomePage'
import Products from './Pages/Products'
import AboutUs from './Pages/AboutUs'

function App() {

  return (
    <>
      <HomePage />
      <Products />
      <AboutUs />
    </>
  )
}

export default App

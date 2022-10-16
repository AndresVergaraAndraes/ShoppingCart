
import './App.css'
import ProductCard from './components/ProductCard'
import ShopingCart from './components/ShopingCart'
import ProductProvider from './context/ProductProvider'
function App() {
  

  

  return (
    <div className="App">
      <h1>Carrito de compras</h1>
      <ProductProvider>
        <ProductCard/>
        <ShopingCart/>
      </ProductProvider>
    </div>
  )
}

export default App

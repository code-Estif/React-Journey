import './App.css'
import ProductCard from './Components/ProductCard'
import laptopImg from "./assets/laptop.jpg"
import phoneImg from "./assets/phone.jpg"
import headphoneImg from "./assets/headphone.jpg"

function App() {
  return (
    <div>
    
      <ProductCard name="Laptop" price="500" desc="Good for coding" img={laptopImg} />

      <ProductCard name="Phone" price="300" desc="Fast and smooth" img={phoneImg} />
      
      <ProductCard name="Headphones" price="40" desc="Great sound" img={headphoneImg} />
    
    </div>
  )
}

export default App
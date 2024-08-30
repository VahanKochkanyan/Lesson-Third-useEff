import { useEffect, useState } from 'react'
import './App.css'
import { Basket } from './Components/Basket'
import { ProductList } from './Components/ProductList'

export default function App() {
  const [products, setProducts] = useState([
    {id: 101, name:"Puma Rs-X1", price:42, photo:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/393161/01/sv01/fnd/PHL/fmt/png/RS-X-Games-Sneakers"},
    {id: 102, name:"Puma Rs-X2", price:42, photo:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/380462/01/fnd/PNA/fmt/png/RS-X-Mix-Men's-Sneakers"},
    {id: 103, name:"Puma Rs-X3", price:35, photo:"https://i.ebayimg.com/images/g/bYoAAOSwoFlmNCUN/s-l1200.jpg"},
    {id: 104, name:"Puma Rs-X4", price:65, photo:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/393161/01/sv01/fnd/PHL/fmt/png/RS-X-Games-Sneakers"},
    {id: 105, name:"Puma Rs-X5", price:62, photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6V6-YHzAjtyMMXAL8U_vVKMu3gTLAT6hppg&s"},
    {id: 106, name:"Puma Rs-X6", price:82, photo:"https://m.media-amazon.com/images/I/71ZApeHKYSL._AC_UY900_.jpg"},
    {id: 107, name:"Puma Rs-X7", price:120, photo:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/395551/06/sv01/fnd/EEA/fmt/png"},
    {id: 108, name:"Puma Rs-X8", price:75, photo:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/371860/01/sv01/fnd/PNA/fmt/png/RS-X-Subvert-Men's-Sneakers"},
    {id: 109, name:"Puma Rs-X8", price:225, photo:"https://images.footlocker.com/is/image/EBFL2/38989601?wid=250&hei=250"},
  ])


  const [basket, setBasket]  = useState([])
  const [total, setTotal] = useState(0)

  const moveToCart = (id) => {
    let prod = products.find((x) => x.id == id);
    let found = basket.find((x) => x.id == id);
    
    if (found) {
        found.count++;
        setBasket([...basket]);
    } else {
        
        setBasket([...basket, {...prod, count: 1, total: prod.price}]);
    }
};


  const handleAdd = id => {
    let found = basket.find(x => x.id == id)
    found.count++
    setBasket([...basket])
  }


  const handleDown = id => {
    let found = basket.find(x => x.id == id)
    if(found.count > 0) {
      found.count--
      setBasket([...basket])
    }
  }


  const handleRemove = id => {
    let res = [...basket]

    res = res.filter(elm => elm.id !== id)
    setBasket(res)
  }


  return  <>
    <h1>Online Shop</h1>
    <div className='row'>
      <ProductList
          items = {products}
          onMove = {moveToCart}
      />
      <Basket
        total={total}
        onTotal={setTotal}
        cart = {basket}
        onAdd={handleAdd}
        onDown={handleDown}
        onRemove={handleRemove}
      />
    </div>
  </>
}


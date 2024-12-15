import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import WishList from './components/WishList'
import AmazonCart from './components/AmazonCart'
import { RecoilRoot } from 'recoil'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Navbar />}>
              <Route path='wishlist' element={<WishList/> } />
              <Route path='cart' element={<AmazonCart />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </RecoilRoot>

    </>
  )
}

export default App

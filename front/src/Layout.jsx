import { useState } from 'react'
import './css/Layout.css'

import Header from './components/Header'
import Footer from './components/Footer'

function Layout() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>
      <Header/>
    </header>


    <footer>
      <Footer/>
    </footer>
    </>
  )
}

export default Layout

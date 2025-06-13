import { Outlet } from "react-router-dom";
import '@/css/Layout.css'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

function Layout() {

  return (
    <>
    <header>
      <Header/>
    </header>

    <main>
      <Outlet/>
    </main>

    <footer>
      <Footer/>
    </footer>
    </>
  )
}

export default Layout

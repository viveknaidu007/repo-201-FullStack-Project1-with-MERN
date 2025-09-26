import './App.css'
import Header from "./components/Header"
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <Header/>
    <main className='min-h-[78vh]'>
      <Outlet/>
    </main>
    <Footer/>
    
    </>
  )
}

export default App
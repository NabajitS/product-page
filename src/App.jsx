import './App.css'
import Navbar from './components/Navbar'
import CompanyBody from './components/CompanyBody'
import TabSystem from './components/TabSystem'
import Footer from './components/Footer'

function App() {

  return (
    <div className='App' >
      <Navbar/>
      <main className='main' >

        <CompanyBody/>
        <TabSystem/>
      </main>
      <Footer/>
    </div>
  )
}

export default App

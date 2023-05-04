import React, {useState} from 'react'
import "./Navbar.css"

function Navbar() {

  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
    <nav className="navbar">
        <div>
            <img src="./images/logo.png" alt="logo" />
        </div>

      <img onClick={ () => {setSidebarOpen(prev => !prev)} } className='ham-icon' src="./images/ham.svg" alt="ham" />


      <div className='temp-sidenav' >

        <div className='nav-key-links' >
            <a href="#">Startups</a>
            <a href="#">Raise Funding</a>
            <a href="#">Learn</a>
        {/* </div>
        

        <div className='nav-auth-links' > */}
            <a href="#">Login</a>
            <button>Get Started</button>
        </div>
      </div>
    </nav>


    <div className={sidebarOpen ? "sidenav" : ""}>
      <div className='nav-key-links' >
          <a href="#">Startups</a>
          <a href="#">Raise Funding</a>
          <a href="#">Learn</a>

          <a href="#">Login</a>
          <button>Get Started</button>
      </div>
    </div>
    

    </>
  )
}

export default Navbar
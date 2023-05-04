import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div className='footer'>
        <div className="flex-container">
            <div className='footer-item' >
                <div>
                    <img className='company-logo' src="./images/logo.png" alt="logo" />
                </div>
                <p>Enabling everyday people to invest <br /> in startups they believe in</p>
                <div className='footer-icons' >
                    <a href="#"><img src="./images/facebook.svg" alt="facebook" /></a>
                    <a href="#"><img src="./images/instagram.svg" alt="facebook" /></a>
                    <a href="#"><img src="./images/linkedin.svg" alt="facebook" /></a>
                    <a href="#"><img src="./images/discord.svg" alt="facebook" /></a>
                </div>
            </div>

            <div className="footer-item">
                <h4>FOR INVESTORS</h4>
                <p>Start Investing</p>
                <p>How Investing Works</p>
            </div>

            <div className="footer-item">
                <h4>FOR STARTUPS</h4>
                <p>Start Investing</p>
                <p>Start Investing</p>
                <p>How it is</p>
            </div>
            <div className="footer-item">
                <h4>Company</h4>
                <p>About</p>
                <p>Blog</p>
                <p>FAQ</p>
                <p>Contact</p>
                <p>We're hiring</p>
            </div>
            <div className="footer-item">
                <p>location_on
                Kanpur| Bengaluru |Delhi</p>
                
                <a href="support@pepcorns.com">support@pepcorns.com</a>
            </div>

        </div>
    </div>
  )
}

export default Footer
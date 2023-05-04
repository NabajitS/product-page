import React from 'react'
import "./CompanyBody.css"


function CompanyBody() {
  return (
    <div className='comp-name-video' >

        <div className="comp-container">
            <div className='comp-details' >
                    <div className='img-div' >
                        <img src="./images/Z.png" alt="Zlogo" />
                    </div>
                    <div>
                        <h2>Zappfresh</h2>
                        <p>New Delhi, Delhi</p>
                    </div>
            </div>
            <div className='buttons-div' >
                    <button>Save</button>
                    <button>Share</button>
            </div>
        </div>

        <hr/>

        <div className='company-heading' >
            <h2>We are an online brand focusing on fresh meat and ready-to-cook/eat products.</h2>
            <a href="#">https://www.zappfresh.com</a>
        </div>

        <div className="video-div">
            <div className="youtube-vid">
                <iframe  src="https://www.youtube.com/embed/H1M1prVk-kI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>  
                </iframe>
            </div>

            <div className='investment-details' >
                <div>
                    <h2>8000</h2>
                    <p>0.16 % of minimum goal raised</p>
                </div>
                <hr />
                <div>
                    <h2>4</h2>
                    <p>Total Investors</p>
                </div>
                <hr />
                <div>
                    <h2>5 Days</h2>
                    <p>left to invest</p>
                </div>
                <button className='black-bg-btn' >Invest Now</button>
            </div>

        </div>


    </div>
  )
}

export default CompanyBody
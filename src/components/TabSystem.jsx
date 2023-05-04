import React, { useState } from 'react';
import "./TabSystem.css"
import Pitch from './Pitch';


function Aside({amount}){

  return(
    <div className='money-div' >
    <h2>{amount}</h2>
    <hr />

    <p> <strong>Rewards</strong> </p>
    <p>Be a part of our journey.</p>

    <p> <strong>Terms and Conditions</strong> </p>
    <p>Community participants offer</p>
    

    <button classname="black-bg-btn-t" style={{padding: "13px 60px", backgroundColor: "black", color: "white"}}  >Invest: 5000</button>

  </div>
  )
}


function TabSystem() {
  const [currentTab, setCurrentTab] = useState("Pitch");

  return (
    <div className='tab-system' >
      <div className="tab-buttons">
        <button onClick={() => setCurrentTab("Pitch")}>Pitch</button>
        <button onClick={() => setCurrentTab("Details")}>Details</button>
        <button onClick={() => setCurrentTab("Discussion")}>Discussion</button>
        <button onClick={() => setCurrentTab("Updates")}>Updates</button>
      </div>
      <br />

      <hr/>

      <div className='tab-system-content' >
        <div className="tab-content">
          <div className={currentTab === "Pitch" ? "show-content" : "content" } >
              <div className='deck-info' >
                  <h2>Deck Info</h2>
                  <div>
                    <a className='file' href="./icon1677185115701.zip" download>Zappfresh_pitch.pdf</a>
                  </div>
              </div>
              <Pitch/>

          </div>

          <div className={currentTab === "Details" ? "show-content" : "content" } >
            <h1>Details Tab</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit illum veniam officiis expedita eos earum tempore aperiam quae placeat dolorum dolor commodi modi nesciunt, est beatae deleniti minima unde doloremque.</p>

          </div>

          <div className={currentTab === "Discussion" ? "show-content" : "content" } >
            <h1>Discussion Tab</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit illum veniam officiis expedita eos earum tempore aperiam quae placeat dolorum dolor commodi modi nesciunt, est beatae deleniti minima unde doloremque.</p>

          </div>

          <div className={currentTab === "Updates" ? "show-content" : "content" } >
            <h1>Updates Tab</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit illum veniam officiis expedita eos earum tempore aperiam quae placeat dolorum dolor commodi modi nesciunt, est beatae deleniti minima unde doloremque.</p>
          </div>

        </div>

        <div className="documents">
          <div>
            <a className='file' href="./icon1677185115701.zip" download>Zapfresh.zip</a>
          </div>
          <Aside amount={1000} />
          <Aside amount={3000} />
          <Aside amount={5000} />
          <Aside amount={10000} />
        </div>
      </div>


    </div>
  );
}

export default TabSystem;




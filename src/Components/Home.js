import React from 'react'
import './CSS/Home.css'
import scan from './images/scanner.png'
import qricon from './images/qr-code.png'

const Home = () => {
  return (
    <div className='home'>
      <p className='homehead'> QRez Tools</p>
      {/* <p>Welcome to the Home Page</p> */}
      <p className='headIntro'>Make use of our collection of QR tools to process digital documents and streamline your workflow seamlessly.</p>

      <div className='container'>
      <ul>
        <li className="list">
          <a href="/sec">
            <div className='card'>
              <div><img className='cardImg' src={scan} alt="scan" /></div>
              <div className='right'>
                <h4>Enhance Or Compress QR Code</h4>
              </div>
            </div>
          </a>
        </li>
        <li className="list">
          <a href="/generateqrcode">
            <div className='card'>
              <div><img className='cardImg' src={qricon} alt="qr-code" /></div>
              <div  className='right'>
                <h4>Generate QR code</h4>
              </div>
            </div>
          </a>
        </li>
      </ul>

      <br />
      <hr />
      <br />

      {/* <div className='createQrSection'>
        <h1 className='createSectionHead'>QR Code Generator: Create your free QR Code</h1>
        <p className='createSectionIntro'>Customize it with your color, shape and logo in 3 simple steps.</p>
        <ul>
          <div className='jss128 jss129'>
            <div className='jss130 jss131'>1</div>
            <div className='jss130 jss132'>2</div>
            <div className='jss130 jss133'>3</div>
          </div>
          <li className='createStepList'>
            <div className='leftCreateSection'>
              <h4>Choose the content of your QR code</h4>
              <p>Select from a wide variety of options: PDF, menu, video, business cards, web, apps, etc.</p>
            </div>
            <div className='rightCreateSection'>
              <img className='createStepImg' src={step1} alt="" />

            </div>
          </li>
          <li></li>
          <li></li>
        </ul>
      </div> */}
      <br />
      <br />
      <br />

      </div>
    </div>
  )
}

export default Home
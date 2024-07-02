import React from 'react'
import instaImage from './images/instagram.png'
import twitterImage from './images/twitter.png'
import linkedinImage from './images/linkedin.png'

const Footer = () => {
  return (
    <div className='footer'>
      <h1>QR-ez</h1>
      <div className='footerCol'>
        <div style={{width:"300px", textAlign: 'justify'}}>
          <h2>About us</h2>
          QR-ez web-based QR code enhancer using SRGANs. The enhancer will take low-resolution QR codes as input and generate high-resolution, clear QR codes.We will also add certain other features to our web app like QR code generato, add various features like QR code size compression etc. Our goal is to make a one stop solution for QR code and related problems.
        <br /> <br />
            Made with ❤️ in India</div>
            <div>
              <h2>Quick Links</h2>
              <ul>
                <li>QR Code Generator</li>
                <li>QR Code Enhancer</li>
                <li>QR Code Size compression</li>
              </ul>
            </div>
            <div>
              <h2>Resources</h2>
              <ul>
                <li><a href="https://en.wikipedia.org/wiki/QR_code">What is a QR Code?</a></li>
                <li><a href="https://www.qr-code-generator.com/qr-codes-for/personal-use/">QR Codes for Personal Use</a></li>
                <li><a href="https://qr-code-generator.ourproshop.com/landingpage">How generative ai works with QR code</a></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div className='connectWithus'>
              <h2>Connect with us</h2>
            <img src={instaImage} alt="Instagram" />
              <img src={twitterImage} alt="Twitter" />
              <img src={linkedinImage} alt="Linkedin" />
            </div>
      </div>
      
      <p>Copyright 2024 QR-ez. All rights reserved.</p>
    </div>
  )
}

export default Footer
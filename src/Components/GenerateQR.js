import React from 'react'
import './CSS/GenerateQR.css';
import empty_qr_preview from './images/empty_qr_preview.svg';

const GenerateQR = () => {


  return (
    <div className='GQR'>
      <div>
        <h1 className='GQR_head'>Generate QR Code</h1>
        <p className='GQR_Intro'>Generate QR Code for your link</p>
      </div>

        <div className='GQR_container'>
          <div className='gqrContainerLeftPart'>
            <div>
              <div>
                <h4>Enter your link here</h4>
                <br />
                <input className='link_input' type='text' placeholder='https://' />
              </div>
            </div>
            <div>
              <div>
                <button className='generate_btn'><span>Generate</span></button>
              </div>
            </div>

          </div>

          <div className='gqrContainerRightPart'>
              <div><img className='qr_preview' src={empty_qr_preview} alt="" /></div>
              <button className='download_btn'><span>Download</span></button>
          </div>
        </div>
    </div>
  )
}

export default GenerateQR
import React, { useState } from 'react'
import './CSS/SEC.css'
import upload_icon from './images/upload icon.png'

const SEC = () => {
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    const handleReset = () => {
        setFile(null);
    }

    return (
        <div className='sec'>
            <div>
                <p className='secHead'>Generate QR code</p>
                <p className='secIntro'>Use our QR code generator to create your free QR code.</p>
            </div>
            <br />
            <h2 style={{ marginBottom: "10px" }}>{file ? "Uploaded File" : "Select File"}</h2>
            {!file &&
                <div className='uploadQrContainer'>
                    <img style={{height: "100px"}} src={upload_icon} alt="" />
                    <br />
                    <input type="file" onChange={handleChange} />
                    <br />
                    <br />
                    <p>or Drop file here</p>
                </div>
            }
            {file &&
                < div className='uploadedContainer'>
                    <img className='uploadedQrCode' src={file} alt='uploadedQR' />
                    <br />
                    <button className='chooseAnotherbtn' onClick={handleReset}>Choose another file</button>
                </div>
            }

            <div className='EnCbtn'>
                <button>Enhance</button>
                <button>Compress</button>
            </div>

        </div >
        
    )
}

export default SEC
import React, { useState } from 'react';
import './CSS/SEC.css';
import upload_icon from './images/upload icon.png';
import axios from 'axios';

const SEC = () => {
    const [file, setFile] = useState(null);
    const [fileUrl, setFileUrl] = useState(null);
    const [enhancedImage, setEnhancedImage] = useState(null);

    function handleChange(e) {
        const uploadedFile = e.target.files[0];
        console.log(uploadedFile);
        setFile(uploadedFile);
        setFileUrl(URL.createObjectURL(uploadedFile));
    }

    const handleReset = () => {
        setFile(null);
        setFileUrl(null);
        setEnhancedImage(null);
    }

    const handleEnhance = () => {
        const formData = new FormData();
        formData.append('file', file);

        axios.post('http://localhost:5000/upload', formData, {
            responseType: 'blob',
        })
        .then(response => {
            const url = URL.createObjectURL(new Blob([response.data]));
            setEnhancedImage(url);
        })
        .catch(error => {
            console.error('There was an error uploading the file!', error);
        });
    }

    return (
        <div className='sec'>
            <div>
                <p className='secHead'>Generate QR code</p>
                <p className='secIntro'>Use our QR code generator to create your free QR code.</p>
            </div>
            <br />
            <h2 style={{ marginBottom: "10px" }}>{file ? "Uploaded File" : "Select File"}</h2>
            {!fileUrl &&
                <div className='uploadQrContainer'>
                    <img style={{height: "100px"}} src={upload_icon} alt="" />
                    <br />
                    <input type="file" onChange={handleChange} />
                    <br />
                    <br />
                    <p>or Drop file here</p>
                </div>
            }
            {fileUrl &&
                < div className='uploadedContainer'>
                    <img className='uploadedQrCode' src={fileUrl} alt='uploadedQR' />
                    <br />
                    <button className='chooseAnotherbtn' onClick={handleReset}>Choose another file</button>
                </div>
            }

            <div className='EnCbtn'>
                <button onClick={handleEnhance}>Enhance</button>
                <button>Compress</button>
            </div>

            {enhancedImage && (
                <div className='uploadedContainer'>
                    <h2>Enhanced Image</h2>
                    <img className='uploadedQrCode' src={enhancedImage} alt='enhancedQR' />
                    <br />
                    <a href={enhancedImage} download="enhanced_qr_code.jpg">
                        <button>Download Enhanced Image</button>
                    </a>
                </div>
            )}
        </div>
    )
}

export default SEC;

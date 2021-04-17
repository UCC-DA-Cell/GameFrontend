import React from 'react'
import './LoadingSpinner.css'
const LoadingSpinner = () => {
    return (
        <div style={{height:'100vh',width:'100vw',display:'flex',justifyContent:'center',alignItems:'center'}} >
        <div className="spinner">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        </div>
        </div>
    )
}

export default LoadingSpinner

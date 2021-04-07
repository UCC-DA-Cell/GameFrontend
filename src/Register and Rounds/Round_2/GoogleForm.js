import React from 'react'
import MainNav from '../../Imported/MainNav'

const GoogleForm = () => {
    return (
        
           
        <div style={{backgroundColor:'rgba(59, 58, 58, 0.808)',color:'whitesmoke',
         justifyContent:'center',textAlign:'center',paddingTop:'130px'}} >
             
            <h1 >Round 2</h1><br/>
            <h2>Guess and Upload</h2>
            <div className="googleForm" >
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfMWbjqAEMtnf3x65k4PakACNB3Bn-xytFOf_qAgfTKZMwcdg/viewform?embedded=true" 
            width="600" height="1200" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
        </div>
   
    )
}

export default GoogleForm

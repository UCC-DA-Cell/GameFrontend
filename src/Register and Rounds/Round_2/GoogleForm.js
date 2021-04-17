import React,{useEffect,useState} from 'react'
import './GoogleForm.css'
import MainNav from '../../Imported/MainNav'

const GoogleForm = () => {
    const [reloadState,setReloadState]=useState(true);
   useEffect(()=>{
    
   // window.location.reload();
    setReloadState(false);
    //window.location.reload()

   },[reloadState])

    return (
        
           
        <div className="bckground_gf"  style={{color:'whitesmoke',
         justifyContent:'center',textAlign:'center',paddingTop:'130px'}} >
             
            <h1 >Round 2</h1><br/>
            <h2>Guess and Upload</h2>
            <div className="googleForm"  >
            {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfMWbjqAEMtnf3x65k4PakACNB3Bn-xytFOf_qAgfTKZMwcdg/viewform?embedded=true" 
             className="google_form"  frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
             {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScl81Pi5GUtpW5jVI3IY_18sY8jiuYfmu6S_qC4qg3Watak4g/viewform?embedded=true" 
             className="google_form"  frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
             <div style={{padding:'20px', borderRadius:'5px'}} id="ff-compose"></div>
            
            </div>
        </div>
   
    )
}

export default GoogleForm

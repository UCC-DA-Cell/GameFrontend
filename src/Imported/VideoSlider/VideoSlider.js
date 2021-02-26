import React from 'react'
import './VideoSlider.css'
import { videoTagString, VideoTag } from 'react-video-tag'
const VideoSlider = () => {

    const videoChanger=(event)=>{
        console.log('lol');
        console.log(event);
        let hder=document.getElementById('slider');
         if(hder){
            document.getElementById('slider').src=event;
            console.log(hder.src);
         } 
    }
    return (
        <div className="video_slider" >
            <video style={{height:'90vh',width:'100vw'}}  id="slider" autoPlay muted loop  >
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" 
                type="video/mp4" />
            
            </video>
            {/* <VideoTag id="slider" src="https://player.vimeo.com/external/351925961.sd.mp4?s=42805946b1bbf5f598d71dafc4519a06c8ff6774&profile_id=139&oauth2_token_id=57447761" /> */}
            <ul className="slides">
                <li className="slide" onClick={(event)=>videoChanger('https://www.w3schools.com/html/mov_bbb.mp4')} ><span></span></li>
                <li className="slide" onClick={(event)=>videoChanger('https://player.vimeo.com/external/351925961.sd.mp4?s=42805946b1bbf5f598d71dafc4519a06c8ff6774&profile_id=139&oauth2_token_id=57447761')}  ><span  ></span></li>
                <li className="slide" onClick={(event)=>videoChanger('https://player.vimeo.com/external/369284722.sd.mp4?s=64160a4abd2a7d1d2da784d0aaec2a3bee32246e&profile_id=139&oauth2_token_id=57447761')} ><span></span></li>
                <li className="slide" onClick={(event)=>videoChanger('https://player.vimeo.com/external/482254021.sd.mp4?s=e5b2f9bebf0585883be5f32e0eb7dcd698f339b0&profile_id=139&oauth2_token_id=57447761')} ><span></span></li>
            </ul>
        </div>
    )
}

export default VideoSlider

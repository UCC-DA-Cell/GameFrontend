import React from 'react'
import {Player} from 'video-react'
import '../../node_modules/video-react/dist/video-react.css'
import './Video_content.css'
function Video_content() {
    return (
        <div className="flex_video" >
            <div className="vdio">
            <Player>
           <source src="http://media.w3.org/2010/05/bunny/movie.mp4" />
           </Player>
            </div>
            <div className="video_content" >
                <p>This is video Content. This is video Content. This is video Content. This is video Content. This is video Content.</p>
            </div>
        </div>
    )
}

export default Video_content

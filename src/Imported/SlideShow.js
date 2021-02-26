import React from 'react'
import '../../node_modules/react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import './SlideShow.css'
const SlideShow = () => {
    const slideImages = [
        {
          url:'https://cdn.mos.cms.futurecdn.net/wAHAqJmwwFP7UZFB6YZEXL.jpg',
          text:'Welcome to the online gaming App'
        },
        {
          url:'https://wallpaperaccess.com/full/263184.png',
          text:'An amazing App for GamePlay...',
        },
       {
         url:'https://i.pinimg.com/originals/30/4c/ef/304cefbf8e08d4e7870109bb0cf20af0.jpg',
         text:'Register Yourself for the upcoming events..'
        }
      ];
      const slideContent=[
        'Welcome to the online gaming App',
        'An amazing App for GamePlay...',
        'Register Yourself for the upcoming events..'
      ]
    return (
        <div>
            <Slide>
           {slideImages.map((p,index)=>(
               <div className="each-slide">
               <div >
                   <img src={p.url} alt="image"
                    style={{backgroundAttachment:'fixed',backgroundPosition:'center'
                    ,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}
                     /> <h1>{p.text}</h1> 
               </div>
             </div>
             
           ))}    
           </Slide>
           {/* <h1>Hello biro</h1> */}
        </div>
    )
}

export default SlideShow

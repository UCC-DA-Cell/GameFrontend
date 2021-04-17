import React,{useEffect} from 'react'
import Aos from 'aos'
import './ContentSection.css'


const ContentSection = () => {
    useEffect(()=>{
        Aos.init({
            duration:800,
            offset: 200,
            easing: 'ease-in-sine',
            delay: 100,
        
        })
        
    },[])
    return (
        <div className="flex__content">
            <div className="contentPart">
                <h1 data-aos="fade-right" >The Gaming App</h1>
                <br/>
                <p data-aos="fade-left" >This app is made for the purpose of enjoyment by the members of UCC. It let's you 
                    to play some interesting games,puzzles,riddles etc. Quickly register for the upcoming event. Also check rules for each event in rules section. </p>
            </div>
            <div  data-aos="flip-left"  className="image__part">
              <img src="https://dhlm2eb86cbhs.cloudfront.net/public/thumbs/picture-story/2020/1308/pubg-1_544_940.jpg" alt="image" />
            </div>
        </div>
    )
}

export default ContentSection

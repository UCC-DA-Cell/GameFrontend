import React, { useState,useEffect } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import Aos from 'aos'
import {useMediaQuery} from 'beautiful-react-hooks'
 import '../../node_modules/bootstrap/dist/css/bootstrap.css'
 import '../../node_modules/aos/dist/aos'
 import '../../node_modules/aos/dist/aos.css'

const items = [
  {
    src: 'https://player.vimeo.com/external/368763065.sd.mp4?s=13988c9dbaddf24bcbceb333cc76d1936255e78a&profile_id=139&oauth2_token_id=57447761',
    altText: 'Welcome to the online gaming App',
    caption: 'Welcome to the online gaming App'
  },
  {
    src: 'https://player.vimeo.com/external/368730818.sd.mp4?s=c3953421878536e1a7db904cae7dae03e7bfad19&profile_id=139&oauth2_token_id=57447761',
    altText: 'An amazing App for GamePlay...',
    caption: 'An amazing App for GamePlay...'
  },
   {
    src: 'https://player.vimeo.com/external/332093699.sd.mp4?s=87239a079ca20d2959ccd862b7560463dfac8802&profile_id=139&oauth2_token_id=57447761',
    altText: 'Register Yourself for the upcoming events..',
    caption: 'Register Yourself for the upcoming events..'
  },
 
];

const Example = (props) => {
  useEffect(()=>{
    Aos.init({duration:1000})
},[])
  const mediaQuery=useMediaQuery('(max-width:450px)')
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
      { !mediaQuery &&  <React.Fragment><video  className="videoSlideShow"    style={{ height:'100vh',width:'100vw',marginLeft:'0'}}  id="slider" autoPlay muted loop  >
                <source src={item.src}
                type="video/mp4" />
            
            </video>
      
        <h3 style={{marginTop:'0px',position:'relative',top:'-40vh',color:'white'}}  >{item.caption}</h3>
        </React.Fragment>}
        { mediaQuery &&  <React.Fragment><video  className="videoSlideShow"    style={{ height:'500px',width:'700px',marginLeft:'0'}}  id="slider" autoPlay muted loop  >
                <source src={item.src}
                type="video/mp4" />
            
            </video>
      
        <h3 data-aos="fade-left"  style={{marginTop:'0px',position:'relative',top:'-40vh',color:'white'}}  >{item.caption}</h3>
        </React.Fragment>}
       
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Example;
import React,{useEffect} from 'react'
import Aos from 'aos'
import SectionDivider from '../sectionDivider.js/SectionDivider'

import './UpcomingEvent.css'
const UpcomingEvent = () => {
    
    useEffect(()=>{
        Aos.init({
            duration:800,
            offset: 200,
            easing: 'ease-in-sine',
            delay: 100,
        
        })
        
    },[])

    return (
        <div>
            <div className="upcoming_event_class" >
                <h1 data-aos="fade-up-left">Upcoming Event</h1>
                <h2 data-aos="fade-down-right" >XYZ Event </h2>
               
                <p data-aos="fade-down-left">It Consists of three Rounds</p>
                {/* <div className="part">
                    <div className="part_1">
                        <h2>Round-1</h2>
                        <p>Some questions or task will be given to all participants. Questions will be different
                            for each participants. On the basis of scores they will be qualified to next round.
                        </p>
                    </div>
                    <div className="part_2">
                    <h2>Round-2</h2>
                        <p>Participants will be asked to upload some pictures on the basis of the given task.
                        </p>
                    </div>
                    <div className="part_3">
                    <h2>Round-3</h2>
                        <p> Find the web round.
                        </p>
                    </div>
                </div> */}
                 
                <div className="mainn" >
                <article data-aos="fade-left" className="sectionn_box"> <h3>Round-1</h3>
                   <p> Some questions or task will be given to all participants. Questions will be different
                            for each participants. On the basis of scores they will be qualified to next round.</p>  </article>
      <article data-aos="fade-right" className="sectionn_box"> <h3>Round-2</h3>
         <p> Participants will be asked to upload some pictures on the basis of the given task.</p> </article>
      <article data-aos="fade-left" className="sectionn_box"> <h3>Round-3</h3><p>Find the web round. </p> </article>
      <article data-aos="fade-right" className="sectionn_box"> <h3>Round-4</h3>
        <p> Participants will be asked to upload some pictures on the basis of the given task. </p>  </article>
        
                </div>
                <h3>Prizes</h3>
                <p>Top 3 winners will get handsome prizes.</p>
                  <div className="mainn">
                  <article data-aos="zoom-in" className="sectionn_box"> <h3>Prize #1</h3>
                                 I-Pad  </article>
                   <article data-aos="zoom-in" className="sectionn_box">  <h3>Prize #2</h3>
                                 JBL speaker  </article>
                    <article data-aos="zoom-in" className="sectionn_box"> <h3>Prize #3</h3>
                                 Rs. 1500   </article>
                  </div>
            </div>
            <SectionDivider />
        </div>
    )
}

export default UpcomingEvent

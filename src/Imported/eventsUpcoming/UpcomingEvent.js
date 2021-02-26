import React from 'react'
import SectionDivider from '../sectionDivider.js/SectionDivider'

import './UpcomingEvent.css'
const UpcomingEvent = () => {
    return (
        <div>
            <div className="upcoming_event_class" >
                <h1>Upcoming Event</h1>
                <h2>XYZ Event </h2>
               
                <p>It Consists of three Rounds</p>
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
                <article className="sectionn_box"> <h3>Round-1</h3>
                    Some questions or task will be given to all participants. Questions will be different
                            for each participants. On the basis of scores they will be qualified to next round.  </article>
      <article className="sectionn_box"> <h3>Round-2</h3>
          Participants will be asked to upload some pictures on the basis of the given task. </article>
      <article className="sectionn_box"> <h3>Round-3</h3>Find the web round.  </article>
      <article className="sectionn_box"> <h3>Round-4</h3>
          Participants will be asked to upload some pictures on the basis of the given task.  </article>
        
                </div>
                <h3>Prizes</h3>
                <p>Top 3 winners will get handsome prizes.</p>
                  <div className="mainn">
                  <article className="sectionn_box"> <h3>Prize #1</h3>
                                 I-Pad  </article>
                   <article className="sectionn_box">  <h3>Prize #2</h3>
                                 JBL speaker  </article>
                    <article className="sectionn_box"> <h3>Prize #3</h3>
                                 Rs. 1500   </article>
                  </div>
            </div>
            <SectionDivider />
        </div>
    )
}

export default UpcomingEvent

import React from 'react'
import MainNav from '../Imported/MainNav'
import SlideShow from '../Imported/SlideShow'
import ContentSection from '../Imported/ContentSection'

import Video_content from '../Imported/Video_content'
import UpcomingEvent from '../Imported/eventsUpcoming/UpcomingEvent'
import SectionDivider from '../Imported/sectionDivider.js/SectionDivider'
import Footer from '../Imported/footer/Footer'

 import NewSlideShow from '../Imported/NewSlideShow'
import VideoSlider from '../Imported/VideoSlider/VideoSlider'


const HomePage = () => {
    return (
        <div className="main_homePage" >
        <MainNav />
        
        <NewSlideShow />
        <ContentSection />
        {/* <VideoSlider /> */}
        {/* <CardBox />
        <Video_content />  */}
        
        <UpcomingEvent />
        
        <Footer />
        </div>
    )
}

export default HomePage

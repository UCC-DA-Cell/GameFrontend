import React,{useEffect} from 'react'
import './Footer.css'
import Aos from 'aos'
const Footer = () => {
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
            <div className="fotter">
            <div className="roww">
            <a data-aos="fade-left" href="#"><i className="fa fa-facebook"></i></a>
            <a data-aos="fade-left" href="#"><i className="fa fa-instagram"></i></a>
            <a data-aos="fade-left" href="#"><i className="fa fa-youtube"></i></a>
            <a data-aos="fade-left" href="#"><i className="fa fa-twitter"></i></a>
            </div>

            <div className="roww">
            <ul>
            <li><a href="#">Contact us</a></li>
            <li><a  href="#">Our Services</a></li>
            <li><a  href="#">Privacy Policy</a></li>
            <li><a  href="#">Terms & Conditions</a></li>
            <li><a  href="#">Career</a></li>
            </ul>
            </div>

            <div  className="roww">
            UCC DAC Copyright © 2021 JCBOSE UST - All rights reserved || Made with Care by UCC members 
            </div>
            </div>


        </div>
    )
}

export default Footer

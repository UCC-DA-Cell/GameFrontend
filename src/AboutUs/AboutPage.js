import React from 'react'
import ProfPic from './profile pic.jpg'
import pic from './Digital Cell--V.jpg'
import classes from './style.module.css'
const AboutPage = () => {
    return (
        <div>
             <div>
    <div className={classes.wrapper}>
        <input type="checkbox" id="btnn" className={classes.btnn} hidden />
        <label for="btnn" className={classes.menu_btn}>
          <i className="fa fa-bars"></i>
          {/* <i className="fa fa-times"></i> */}
        </label>
        <nav className={classes.sidbar}>
          <div className={classes.title}>Side Menu</div>
            <ul className={classes.list_1items}>
                <li><a href="#"><i style={{float:'left',marginTop:'15px'}} className="fa fa-home"></i>Home</a></li>
                <li><a href="#"><i style={{float:'left',marginTop:'15px'}} className="fa fa-sliders-h"></i>Clients</a></li>
                <li><a href="#"><i  style={{float:'left',marginTop:'15px'}} className="fa fa-address-book"></i>Services</a></li>
                <li><a href="#"><i style={{float:'left',marginTop:'15px'}} className="fa fa-cog"></i>Settings</a></li>
                <li><a href="#"><i style={{float:'left',marginTop:'15px'}} className="fa fa-stream"></i>Features</a></li>
                <li><a href="#"><i style={{float:'left',marginTop:'15px'}} className="fa fa-user"></i>About us</a></li>
                <li><a href="#"><i style={{float:'left',marginTop:'15px'}} className="fa fa-globe-asia"></i>Languages</a></li>
                <li><a href="#"><i style={{float:'left',marginTop:'15px'}} className="fa fa-envelope"></i>Contact us</a></li>
                <div className="icons">
                    <a href="#"><i className="fa fa-facebook-f"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-github"></i></a>
                    <a href="#"><i className="fa fa-youtube"></i></a>
                </div>
            </ul>
         </nav>
    </div>
    <section className={classes.start}>
        <div className={classes.logo}></div>
        <div className={classes.title}>
            <h1>UCC & DA</h1>
            <h2><span className={classes.change_content} ></span></h2>
        </div>
        <div className={classes.button}>
            <a href="#" className={classes.btn}>WATCH VIDEO</a>
            <a href="#" className={classes.btn}>CONTACT US</a>
        </div>
    </section>
    <section className={classes.about}>
        <div style={{backgroundImage:`url(${pic})`}}  className={classes.about_section}>
            <div className={classes.inner_container}>
                <h1>About Us</h1>
                <p className={classes.text}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <div className={classes.skills}>
                    <span>Web Development</span>
                    <span>Management</span>
                    <span>Competitive Programming</span>
                </div>
                
            </div>
        </div>
    </section>
    <section className={classes.teacher_coordinators}>
        <div className={classes.team_section}>
            <h1>Mentors</h1>
            <span className={classes.border}></span>
        <div className={classes.ps}>
            <a href="#p1"><img src={ProfPic} alt="" /></a>
            <a href="#p2"><img src={ProfPic} alt="" /></a>
            <a href="#p3"><img src={ProfPic} alt="" /></a>
        </div>
        <div className={classes.section} id="p1">
            <span className={classes.name}  > professor a</span>
            <span className={classes.border}></span>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Why do we use it?It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        </div>
        <div className={classes.section} id="p2">
            <span className={classes.name}> professor b</span>
            <span className={classes.border}></span>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Why do we use it?It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        </div>
        <div className={classes.section} id="p3">
            <span className={classes.name}> professor c</span>
            <span className={classes.border}></span>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Why do we use it?It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        </div>
        </div>
    </section>
    <section className={classes.developers}>
        <div className={classes.team_title}> <h1>Developing Team</h1></div>
        <div className={classes.card_container}>
            <div className={classes.card}>
                <img src={ProfPic} alt="John" style={{width:'100%'}} />
                <h1 style={{color:'black',marginBottom:'0'}} >1</h1>
                <p style={{color:'black',marginBottom:'0'}} className={classes.title_card}>CEO & Founder, Example</p>
                <p style={{color:'black',marginBottom:'0'}} >Harvard University</p>
                <a href="#"><i className="fa fa-instagram"></i></a>
                <a href="#"><i className="fa fa-facebook"></i></a>
                <p><button className={classes.btncard} >Contact</button></p>
            </div>
            <div className={classes.card}>
                <img src={ProfPic} alt="John" style={{width:'100%'}} />
                <h1 style={{color:'black',marginBottom:'0'}} >2</h1>
                <p style={{color:'black',marginBottom:'0'}} className={classes.title_card}>CEO & Founder, Example</p>
                <p style={{color:'black',marginBottom:'0'}} >Harvard University</p>
                <a href="#"><i className="fa fa-instagram"></i></a>
                <a href="#"><i className="fa fa-facebook"></i></a>
                <p><button className={classes.btncard} >Contact</button></p>
            </div>
            <div className={classes.card}>
                <img src={ProfPic} alt="John" style={{width:'100%'}} />
                <h1 style={{color:'black',marginBottom:'0'}} >3</h1>
                <p style={{color:'black',marginBottom:'0'}} className={classes.title_card}>CEO & Founder, Example</p>
                <p style={{color:'black',marginBottom:'0'}} >Harvard University</p>
                <a href="#"><i className="fa fa-instagram"></i></a>
                <a href="#"><i className="fa fa-facebook"></i></a>
                <p><button className={classes.btncard} >Contact</button></p>
            </div>
            <div className={classes.card}>
                <img src={ProfPic} alt="John" style={{width:'100%'}} />
                <h1 style={{color:'black',marginBottom:'0'}} >4</h1>
                <p style={{color:'black',marginBottom:'0'}} className={classes.title_card}>CEO & Founder, Example</p>
                <p style={{color:'black',marginBottom:'0'}} >Harvard University</p>
                <a href="#"><i className="fa fa-instagram"></i></a>
                <a href="#"><i className="fa fa-facebook"></i></a>
                <p><button className={classes.btncard} >Contact</button></p>
              </div>
    
            <div className={classes.card}>
                <img src={ProfPic} alt="John" style={{width:'100%'}} />
                <h1 style={{color:'black',marginBottom:'0'}} >5</h1>
                <p style={{color:'black',marginBottom:'0'}} className={classes.title_card}>CEO & Founder, Example</p>
                <p style={{color:'black',marginBottom:'0'}} >Harvard University</p>
                <a href="#"><i className="fa fa-instagram"></i></a>
                <a href="#"><i className="fa fa-facebook"></i></a>
                <p><button className={classes.btncard} >Contact</button></p>
            </div>    
            <div className={classes.card}>
                <img src={ProfPic} alt="John" style={{width:'100%'}} />
                <h1 style={{color:'black',marginBottom:'0'}} >6</h1>
                <p style={{color:'black',marginBottom:'0'}} className={classes.title_card}>CEO & Founder, Example</p>
                <p style={{color:'black',marginBottom:'0'}} >Harvard University</p>
                <a href="#"><i className="fa fa-instagram"></i></a>
                <a href="#"><i className="fa fa-facebook"></i></a>
                <p><button className={classes.btncard} >Contact</button></p>
            </div>
            <div className={classes.card}>
                <img src={ProfPic} alt="John" style={{width:'100%'}} />
                <h1 style={{color:'black',marginBottom:'0'}} >7</h1>
                <p style={{color:'black',marginBottom:'0'}} className={classes.title_card}>CEO & Founder, Example</p>
                <p style={{color:'black',marginBottom:'0'}} >Harvard University</p>
                <a href="#"><i className="fa fa-instagram"></i></a>
                <a href="#"><i className="fa fa-facebook"></i></a>
                <p><button className={classes.btncard} >Contact</button></p>
            </div>
            <div className={classes.card}>
                <img src={ProfPic} alt="John" style={{width:'100%'}} />
                <h1 style={{color:'black',marginBottom:'0'}} >8</h1>
                <p  style={{color:'black',marginBottom:'0'}} className={classes.title_card}>CEO & Founder, Example</p>
                <p style={{color:'black',marginBottom:'0'}} >Harvard University</p>
                <a href="#"><i className="fa fa-instagram"></i></a>
                <a href="#"><i className="fa fa-facebook"></i></a>
                <p><button className={classes.btncard} >Contact</button></p>
            </div>
            <div className={classes.card}>
                <img src={ProfPic} alt="John" style={{width:'100%'}} />
                <h1 style={{color:'black',marginBottom:'0'}} >9</h1>
                <p style={{color:'black',marginBottom:'0'}} className={classes.title_card}>CEO & Founder, Example</p>
                <p style={{color:'black',marginBottom:'0'}} >Harvard University</p>
                <a href="#"><i className="fa fa-instagram"></i></a>
                <a href="#"><i className="fa fa-facebook"></i></a>
                <p><button className={classes.btncard} >Contact</button></p>
            </div> 
        </div>
    </section>
    <section className={classes.footer_section}>
        <div className={classes.main_content}>
            <div className={classes.left, classes.box}>
                <h2>About Us</h2>
                <div className={classes.content}>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.  
                    </p>
                    <div className={classes.social}>
                        <a href="#"><span style={{marginRight:'5vw' }} className="fa fa-facebook-f"></span></a>
                        <a href="#"><span style={{marginRight:'5vw' }} className="fa fa-instagram"></span></a>
                        <a href="#"><span className="fa fa-youtube"></span></a>
                    </div>
                </div>
            </div>
            <div   className={classes.center,classes.box}>
                <h2>Address</h2>
                <div className={classes.content}>
                    <div  style={{marginBottom:'2rem'}} className={classes.place}>
                        <span className="fa fa-map"></span>
                        <span className={classes.text}>Ymca Ust, Sector-6, Faridabad</span>
                    </div>
                    <div style={{marginBottom:'2rem'}} className={classes.phone}>
                        <span className="fa fa-mobile-phone"></span>
                        <span className={classes.text}>+91-3333333333</span>
                    </div>
                    <div style={{marginBottom:'2rem'}} className={classes.email}>
                        <span className="fa fa-envelope"></span>
                        <span className={classes.text}>digi@gmail.com</span>
                    </div>
                </div>
            </div>
            <div className={classes.right ,classes.box}>
                <h2>Contact Us</h2>
                <div className={classes.content}>
                    <form action="#">
                        <div className={classes.email}>
                            <div className={classes.text}>Email *</div>
                            <input style={{width:'30vw'}}  type="email" required />
                        </div>
                        <div className={classes.msg}>
                            <div className={classes.text}>Message *</div>
                            <textarea rows="5" cols="25"  style={{width:'30vw'}} required></textarea>
                        </div>
                        <div className={classes.btnform}>
                            <button type="submit">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div className={classes.bottom}>
            <center>
                <span className={classes.credit}> Created By <a href="#">UCC & DA</a>|</span>
                <span className="fa fa-copyright"></span><span> 2021 All Rights Reserved.</span>
            </center>
        </div>
    </section>
   </div>
        </div>
    )
}

export default AboutPage

import React from 'react'
import logo from '../Images/yohannes.png'
import './about.css'
import { DiJavascript1,  DiReact, DiHtml5 , DiCss3, DiNodejsSmall } from "react-icons/di";


export default function About() {
    return (
        <div className="card mb-3" id="about" >
            <div className="row no-gutters">
                <div id="my-pic" className="col-md-4">
                    <img src={logo} className="card-img" alt="..." />
                    <p>Yohannes Bogale </p>
                    <p>Software Automation engineer at AVOXI</p>
                    <p>Web Developer at DigitalCrafts </p>
                    <span>
                        <button><a href="https://www.linkedin.com/in/yohannes-bogale-950752176/" target="_blank" class="LI-view-profile">View profile</a></button>
                    </span>
                </div>

                <div className="col-md-8" id="about">
                    <div className="card-body">
                        <h5 className="card-title">About Me</h5>
                        <p className="card-text">
                            I love to transform ideas into reality using code. I
                            am passionate about using Javascript and animations
                            to create awesome user experiences.
                        </p>
                        <p className="card-text">
                            With over 4 years of experience automation testing and 
                            1 year of experiance in developing web applications using 
                            the latest front-end and back-end technologies.
                        </p>
                        <p className="card-text">
                           Experience creating custom websites with  
                           <br/>
                           <span id= "skills">
                           ReactJs || JavaScript ||
                            NodeJs || Express || MySQL ||  HTML5 || and CSS3.
                           </span> 
                           </p>
                    </div>
                    <div className="card-group">
      <div className="card">
        {/* <img src="" className="card-img-top" alt="..."/> */}

        <DiJavascript1 className="card-img-top" color='yellow' size={200} />
        <div class="text">JavaScript</div>

      </div>
      <div className="card">
      <DiReact  id="js" className="card-img-top" color='powderblue' size={200} />
      <div class="text">React</div>

      </div>

      <div className="card">
      <DiHtml5 className="card-img-top" color='white' size={200} />
      <div class="text">HTML5</div>

      </div>
         
      <div className="card">
      <DiCss3 className="card-img-top" color='white' size={200} />
      <div class="text">CSS3</div>

      </div>
      <div className="card">
      <DiNodejsSmall className="card-img-top" color='white' size={200} />
      <div class="text">NodeJs</div>

      </div>
    </div>
                </div>
 
 
            </div>
            

        </div>
    )
}

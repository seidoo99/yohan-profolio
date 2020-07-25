import React from 'react'
import "./home.css"

export default function Home() {
    return (

        <div id="home">

        
        <div className="container-fluid bg-2 text-center" >
            {/* <div className="col-sm-4">
                <div class="LI-profile-badge" data-version="v1" data-size="large" data-locale="en_US" data-type="vertical" data-theme="light" data-vanity="mesay-bekele"><a class="LI-simple-link" href='https://www.linkedin.com/in/mesay-bekele?trk=profile-badge' target="_blank" rel="noopener noreferrer">Yohannes</a></div>
            </div> */}

            <div className="col-sm-8">
                <h3 className="title">Web Developer</h3>
                <hr className="hr-light my-4" />
            </div>
            <div className="col-sm-8">
                <h3 className="title2">Automation Software Engineer</h3>
                <hr className="hr-light my-4" />
            </div>
        </div>
        </div>
    )
}

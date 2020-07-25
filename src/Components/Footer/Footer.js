  
import React, { Component } from 'react'
import './Footer.css'
import {  FaGithubSquare, FaLinkedin, FaEnvelope} from 'react-icons/fa'
import {
    Link
} from "react-router-dom";


class Footer extends Component {
    render() {
        return (
  <div id="contacts">

  <footer id="sticky-footer" className="py-4">
    <div className="container text-center">
     <a href='https://github.com/yohannesbog/shopoingCart_React' target="_blank">

     <FaGithubSquare id='contacticon' color='black' size={40} />     
</a>

<a href='https://www.linkedin.com/in/yohannes-bogale-950752176/' target="_blank">

<FaLinkedin id='contacticon' color="babyblue" size={40} />


</a>
<a href='https://www.linkedin.com/in/yohannes-bogale-950752176/' target="_blank">

<FaEnvelope id='contacticon' color="black" size={40} />
yohannesbog@gmail.com

</a>
          </div>
  </footer>
  </div>
        )
    }
}

export default Footer
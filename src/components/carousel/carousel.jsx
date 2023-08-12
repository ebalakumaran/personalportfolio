import React from 'react'
import ImageSlider from "./ImageSlider"
import './carousel.css'
import IMG1 from '../../assets/guvi.jfif'
import IMG2 from '../../assets/cisco.jfif'
import IMG3 from '../../assets/simplilearn.jfif'
import IMG4 from '../../assets/nptel.jfif'
import IMG5 from '../../assets/prepinsta.jfif'
import IMG6 from '../../assets/udemy.jfif'
import IMG7 from '../../assets/ae.jfif'
import IMG8 from '../../assets/cc.jfif'
import IMG9 from '../../assets/google.jfif'
import IMG10 from '../../assets/tp.jfif'

const Certifications = () => {
    const slides = [
        { url: IMG2, title: "\"JavaScript Essentials\" - CISCO" },
        { url: IMG10, title: "\"Python scripting for automation\" - Tutorials Point" },
        { url: IMG10, title: "\"Fundamentals of DevOps\" - Tutorials Point" },
        { url: IMG4, title: "\"Cloud Computing\"- NPTEL" },
        { url: IMG7, title: "\"HTML HyperText Markup Language\" - Academy Europe Open University" },
        { url: IMG9, title: "\"The Fundamentals of Digital Marketing\" - Google" },
        { url: IMG5, title: "\"Java Nano Degree\" - PrepInsta" },
        { url: IMG5, title: "\"DSA using Java\" - PrepInsta" },
        { url: IMG5, title: "\"DBMS\" - PrepInsta" },
        { url: IMG6, title: "\"Javascript\" - Udemy" },
        { url: IMG6, title: "\"Wordpress\" - Udemy" },
        { url: IMG6, title: "\"Object Oriented Programming\" - Udemy" },
        { url: IMG6, title: "\"MySQL Database Development Mastery\" - Udemy" },
        { url: IMG8, title: "\"Scalable web applications on Kubernetes\" - Cognitive Class" },
        { url: IMG3, title: "\"Getting started with AWS\" - Simplilearn" },
        { url: IMG1, title: "\"Python\" - GUVI" },
      ];

      const containerStyles = {
        width: "500px",
        height: "280px",
        margin: "0 auto",
      };
  return (
    <section id="certifications">
        <h5>Certifications I earned</h5>
        <h2>Unveiling a tapestry of attained certifications</h2>
        <div style={containerStyles} id="carouselDiv">
            <ImageSlider slides={slides} />
        </div>
        <br/>
        <br/><br/><br/>
    </section>
  )
}

export default Certifications
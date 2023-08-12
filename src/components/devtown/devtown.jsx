import React from 'react'
import './devtown.css'
import { BiSolidRightArrow } from 'react-icons/bi'
const Devtown = () => {
    return (
        <section id='devtown'>
            <h2>Devtown ( Formally Shape-AI )</h2>
            <h5>Full Stack (Training and Internship) | 08/2021 - 11/2021</h5>
            <div className='responsibilities'>
                <h3>Responsibilities and Deliverables</h3><br />
                <p><BiSolidRightArrow className='arrow' /> &nbsp;Developed and maintained responsive web applications using HTML, CSS, JavaScript, Node JS, Express JS, and
                    MongoDB.<br /><br />
                    <BiSolidRightArrow className='arrow' /> &nbsp;Implemented front-end designs with HTML and CSS, ensuring a consistent and responsive user experience across all
                    devices<br /><br />
                    <BiSolidRightArrow className='arrow' /> &nbsp;Utilized JavaScript and React JS to enhance website interactivity and functionality, creating dynamic and engaging user interfaces<br /><br />
                    <BiSolidRightArrow className='arrow' /> &nbsp;Integrated server-side logic using Node JS and Express JS to build robust and scalable web applications
                    <br /><br />
                    <BiSolidRightArrow className='arrow' /> &nbsp;Developed and maintained RESTful APIs using Node.js and Express.js for efficient data retrieval and manipulation
                    <br /><br />
                    <BiSolidRightArrow className='arrow' /> &nbsp;Designed and implemented MongoDB databases to store and retrieve data efficiently<br /><br />
                    <BiSolidRightArrow className='arrow' /> &nbsp;Collaborated with team members to review code, provide feedback, and implement best practices for code optimization
                    and maintainability

                </p>
            </div>
            <div className="skills">
                <h3>Skills Used</h3><br />
                <p>
                    <BiSolidRightArrow className='arrow' /> &nbsp;<b>HTML &nbsp;:&nbsp;</b>Created structured and semantic web pages, incorporating appropriate tags and elements<br /><br />
                    <BiSolidRightArrow className='arrow' /> &nbsp;<b>CSS &nbsp;:&nbsp;</b>Implemented styling and layout techniques to achieve visually appealing and responsive designs<br /><br />
                    <BiSolidRightArrow className='arrow' /> &nbsp;<b>JavaScript and React JS &nbsp;:&nbsp;</b>Developed interactive and dynamic features, enhancing user experience and functionality<br /><br />
                    <BiSolidRightArrow className='arrow' /> &nbsp;<b>Node JS &nbsp;:&nbsp;</b>Developed server-side applications, handling requests, and managing data flow<br /><br />
                    <BiSolidRightArrow className='arrow' /> &nbsp;<b>Express JS &nbsp;:&nbsp;</b>Built robust and scalable web APIs, implementing routing and middleware for efficient server operations<br /><br />
                    <BiSolidRightArrow className='arrow' /> &nbsp;<b>MongoDB &nbsp;:&nbsp;</b>Designed and implemented NoSQL databases, ensuring efficient data storage and retrieval

                </p>
            </div>
        </section>
    )
}

export default Devtown
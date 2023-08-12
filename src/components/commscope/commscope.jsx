import React from 'react'
import './commscope.css'
const Commscope = () => {
  return (
    <section id='commscope'>
      <h2>CommScope ARRIS ( Formerly Motorola India )</h2>
      <h5>Software Engineer | 07/2022 - Present</h5>
      <h5>Bangalore, Karnataka</h5>
      <div className='responsibilities'>
        <h3>Responsibilities and Deliverables</h3><br />
        <p>In my current role, I am responsible for developing and implementing various tools and features to enhance the efficiency and
          effectiveness of the QA team. These include:<br /><br />
          <b>Hardware builds forecasting tool &nbsp;:&nbsp;</b>
          Developed a hardware builds forecasting tool for the QA team with admin rights and graphs using Kendo UI. Utilized Full
          Stack skills to create the tool, which allowed the QA team to forecast hardware builds and included admin functionalities
          and visual graphs.<br /><br />
          <b>Asset tracking tool &nbsp;:&nbsp;</b>
          Created an Asset tracking tool with CRUD operations and automated Outlook mail reminders to managers, directors and
          vice presidents of the QA team. Leveraged Full Stack skills for the tool development and Python for sending emails using
          SMTP. This tool streamlined the asset tracking process of all the teams.<br /><br />
          <b>Daily summary report tool &nbsp;:&nbsp;</b>
          Built a daily summary report tool that provides an overview of tested builds with reports and statistical graphs and allows
          users to send custom report mails. Utilized Full Stack skills and Kendo UI for the development of the tool and Python for
          automatically pushing the changes from the Powerpoint report to the database and to send mails on daily basis using
          cronjob. All the activities of updating the Powerpoint data to the database are handled in Jenkins.<br /><br />
          <b>AI Powered IoT Controller for Modem ( Applied for patent ) &nbsp;:&nbsp;</b>
          Implemented a groundbreaking feature in a modem, resulting in the development of AI Powered IoT Controller integrated
          within a modem making it as a Smart modem . Utilized Python, Cloud AWS RDS, Machine learning, Docker and Linux to
          enhance the modem's capabilities.<br /><br />
          <b>QA Chatbot &nbsp;:&nbsp;</b>
          Developed a chatbot using sequential neural network that has the knowledge of test cases, test plans, test cycles, and
          test results from JIRA. Incorporated Universal Sentence Encoders, TF-IDF, and cosine similarity to assist in finding
          similar PD's (Product Defects) and to provide test case suggestions for a particular PD. The chatbot is hosted by using
          Gradio.<br /><br />
        </p>
      </div>
      <div className="skills">
        <h3>Skills Used</h3><br />
        <p>
          <b>HTML, CSS, JavaScript, Kendo UI, PHP, MySQL &nbsp;:&nbsp;</b>Utilized these web development technologies to create various tools,
          including the hardware builds forecasting tool, asset tracking tool, and daily summary report tool. Utilized these skills for
          frontend and backend development, database management, and creating interactive user interfaces.<br /><br />
          <b>Python &nbsp;:&nbsp;</b>Implemented Python programming language for multiple purposes. Used it in QA chatbot for script development
          and for fetching data from JIRA to feed into the model, for sending automated Outlook mail reminders in the asset
          tracking tool using SMTP, automatically pushing changes from the Powerpoint report to the database in the daily
          summary report tool, and enhancing the modem's capabilities in the AI Powered IoT Controller.<br /><br />
          <b>Machine Learning &nbsp;:&nbsp;</b>Applied machine learning techniques in the development of the AI Powered IoT Controller for the
          modem. Leveraged machine learning algorithms and models to enhance the modem's functionality and to make it a Smart
          modem. This likely involved tasks such as data preprocessing, training models, and deploying the machine learning
          system.<br /><br />
          <b>Cloud AWS RDS &nbsp;:&nbsp;</b>Utilized Amazon Web Services (AWS) Relational Database Service (RDS) for managing and storing
          data related to the AI Powered IoT Controller.<br /><br />
          <b>Docker &nbsp;:&nbsp;</b>Utilized Docker, a containerization platform, in the development of the AI Powered IoT Controller. Docker is used
          for the deployment of lightweight, isolated containers that packages the application and its dependencies. It likely
          facilitated the deployment and management of the modem's software components.<br /><br />
          <b>Jenkins &nbsp;:&nbsp;</b>To run scheduled jobs that execute Python scripts. It handles the coordination, execution, and reporting of the
tasks, helping to streamline and automate the process and reduce manual effort.<br /><br />
          <b>OS used &nbsp;:&nbsp;</b>Windows for Development, Linux for Cronjob and Deployment.
        </p>
      </div>
    </section>
  )
}

export default Commscope
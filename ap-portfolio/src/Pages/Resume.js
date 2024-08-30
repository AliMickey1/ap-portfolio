import React from "react";
import '../Styles/Resume.css'
import MIE from '../Assets/CertificationBadges/Microsoft Inn.png';
import apple from '../Assets/CertificationBadges/AppleTeacher_black.png';
import ISTE from '../Assets/CertificationBadges/iste-certified-educator.png';
import Minecraft from '../Assets/CertificationBadges/MinecraftCert.png';
import Nearpod from '../Assets/CertificationBadges/NearpodCch.png';
import UMW from '../Assets/icons/umw.png';
import LU from '../Assets/icons/libertyu.png';
import Bloom from '../Assets/icons/bloomtechlogo.jpg';

function Resume() {
    return(
        <div className="resume-container">
            <div className="professional-summary">
                <h1>PROFESSIONAL SUMMARY</h1>
                    <p>Motivated Web Developer with an extensive knowledge of web development, design, and coding, as well as experience in a wide range of programming languages, frameworks, and tools. 
                    Proven success in developing and deploying applications, websites, and web services. Highly organized and detail-oriented, with a knack for finding creative solutions to challenging problems.</p>
                
            </div>
    <div className="sections">
        <section className="experience-section">
            <div className="experience">
                <h1>EXPERIENCE</h1>
                    <div className="web">
                        <h3>Web Developer & Graphic Designer</h3>
                        <h4>Freelance</h4>
                        <p>April 2024 - Present</p>
                        <ul>
                            <li>Developed designs to meet individual client needs.</li>
                            <li>Created clean, well-documented custom code and updates.</li>
                            <li>Leveraged mastery of HTML, CSS, Auth0, React.js and JavaScript to build top-quality code for diverse projects.</li>
                            <li>Created logos, flyers, and other marketing materials.</li>
                            <li>Designed graphics for social media campaigns, such as Facebook ads and Instagram posts.</li>
                            <li>Developed multiple marketing materials, including brochures, flyers, and posters, to promote products or services.</li>
                        </ul>
                    </div>
                    <div className="AI">
                        <h3>AI Content Reviewer / Super Reviewer</h3>
                        <h4>RemoTask</h4>
                        <p>November 2023 - Present</p>
                        <ul>
                            <li>Work to improve Artificial Intelligence (AI)</li>
                            <li>Developed and implemented a wide range of AI prompts, contributing to the overall functionality and performance of the AI system</li>
                            <li>Collaborated with a diverse team of engineers and data scientists to refine AI prompts and improve system accuracy</li>
                            <li>Conducted rigorous testing and validation of AI responses to ensure they meet established guidelines and standards</li>
                            <li>Identified and addressed potential risks and vulnerabilities in AI responses, enhancing system security and reliability</li>
                            <li>Provided critical feedback and recommendations for AI system improvements, driving continuous innovation and advancement</li>
                            <li>Stayed abreast of the latest developments and trends in AI, applying this knowledge to the generation of effective and relevant prompts</li>
                            <li>Contributed to a positive team culture by sharing knowledge, offering help, and maintaining open and effective communication.</li>
                        </ul>
                    </div>
                    <div className="PWCS">
                        <h3>Instructional Technology Coach</h3>
                        <h4>Prince William County Public School</h4>
                        <p>January 2019 - Present</p>
                        <ul>
                            <li>Effectively collaborate with educators, administration, parents, and students, translating complex technical concepts into understandable terms to ensure proper use and access to programs and technology that support learning outcome goals</li>
                            <li>Manage the school website by adding and removing content and ensuring that it passes accessibility, quality assurance, and SEO</li>
                            <li>Provide guidance and technical support as needed for teacher and student laptop issues related to software and/or hardware</li>
                            <li>Teach approximately 700 students programming, digital citizenship, robotics, and/or how to use various applications</li>
                            <li>Create and implement comprehensive Canvas courses, enhancing the learning experience for numerous staff and students</li>
                            <li>Coach First Lego League Robotics team to program robots and attend worldwide robotics competition</li>
                            <li>Stay updated with the latest industry trends and technologies, demonstrating a passion for continuous learning and professional growth</li>
                        </ul>
                    </div>
                    <div className="PWCS-KG">
                        <h3>Kindergarten Teacher</h3>
                        <h4>Prince William County Public School</h4>
                        <p>January 2014 - January 2019</p>
                        <ul>
                            <li>Provided educational experience to students that included robotics and hands-on technology use which led to building computational thinking skills in 20+ students who struggled with traditional learning</li>
                            <li>Helped approximately 22 students excel in all academic standards reaching 95% of students earning above grade level at the end of kindergarten within 1 year</li>
                        </ul>
                    </div>
            </div>  
        </section>
        <section className="education-section">
            <div className="education">
                <h1>EDUCATION</h1>
                    <div className="bloomtech">
                        <img src={Bloom} alt="bloomtech logo" />
                        <h5 className="bloom">Bloom Institute of Technology</h5>
                        <p>Graduate in Full Stack Web Development <br/>
                         April 2024
                        </p>
                    </div>
                    <div className="LU">
                        <img src={LU} alt="Liberty University logo" />
                        <h5 className="liberty">Liberty University </h5>
                        <p>Master of Education in Teaching and Learning: Educational Technology and Online Instruction <br/>
                         December 2018
                        </p>
                    </div>
                    <div className="LU">
                        <img src={LU} alt="Liberty University logo" />
                        <h5 className="liberty2">Liberty University </h5>
                        <p>Master of Education: Elementary Education <br/>
                         May 2014
                        </p>
                    </div>
                    <div className="UMW">
                        <img src={UMW} alt="University of Mary Washington logo" />
                        <h5 className="marywash">University of Mary Washington </h5>
                        <p>Bachelor of Science Degree in Business Administration <br/>
                        May 2005
                        </p>
                    </div>
            </div>
            <div className="divider"></div>
        {/* </section> */}
        {/* <section className="cert-section"> */}
            <div className="certifications">
                <h1>CERTIFICATIONS</h1>
                    {/* <div className="ISTE">
                        <p>The International Society for Technology in Education Certified Educator</p> */}
                            <img src={ISTE} alt="ISTE Certification badge" />
                    {/* </div>
                    <div className="MIE">
                        <p>Certified Microsoft Innovative Educator</p> */}
                            <img src={MIE} alt="Microsoft Innovator badge" />
                    {/* </div>

                    <div className="Minecraft">
                        <p>Minecraft Certified Educator</p> */}
                            <img src={Minecraft} alt="Microsoft Innovator badge" />
                    {/* </div>
                    <div className="nearpod">
                        <p>Nearpod Certified Educator</p> */}
                            <img src={Nearpod} alt="Microsoft Innovator badge" />
                    {/* </div>
                    <div className="VSTE">
                        <p>Virginia Society for Technology in Education Certified Coach</p> */}
                        {/* <img src={MIE} alt="Microsoft Innovator badge" /> */}
                    {/* </div>  */}
                    <div className="Apple">
                        {/* <p>Certified Apple Teacher</p>  */}
                            <img className="apple-img" src={apple} alt="Microsoft Innovator badge" />
                     </div>
            </div>
            <div className="divider"></div>
            <div className="skills">
                <h1>Skills</h1>
                <p className="p-skills">React.js
                •	Redux
                •	Hooks
                •	Context API
                •	Jest
                •	Cypress
                •	Yup
                •	Axios
                •	JavaScript
                •	HTML
                •	CSS
                •	API/API Integration
                •	Node.js
                •	GitHub
                •	VS Code
                •	Vercel
                •	SQL
                •	Express
                •	Heroku
                •	Robotics
                •	Adobe Photoshop
                •	Adobe Premiere Pro / Premiere Rush
                •	Canva
                •	Artificial intelligence knowledge
                •	Artificial Intelligence in Education
                </p>
            </div>

        </section>
        </div>
    </div>
    );


};

export default Resume;
import React from "react";
import '../Styles/Home.css'
import HiAli from '../Assets/MyPictures/HiAli'
function Home() {



    return (
        <div class="home">
            <section id="About" className="about-section">
            <div className="container">

            <div className="my-pic">
                <img src={HiAli} alt="me" />
            </div>
            <div className="info">
                <h2>😎 Educator, Developer, Tech Enthusiast</h2>
                <p>Welcome!👋 I am naturally creative and enjoy learning new ways to express my creativity. I enjoy photography, videography, the editing process, and digital art. I thrive on learning new skills to creatively solve problems and design impactful projects. 
                    I became interested in web development as it fit in naturally with my tech skills and allowed me to create functional websites while problem-solving around that process.
                    My journey began with HTML and CSS through a combination of self-teaching and a Framework Television certification program, leading me to BloomTech’s Full Stack Web Development program.
                </p>
                <p> As a Full Stack Software Engineer and Instructional Technology Coach, I bridge the gap between technology and education with innovative solutions.
                With additional expertise in multimedia creation (Adobe Photoshop, Premiere Pro, Rush, Canva) and educational tools (Minecraft Education Edition, Microsoft Office suite), I bring a unique blend of technical proficiency and creative flair to all my projects.</p>
                <p> Lifelong Learner: Driven by curiosity, I continuously expand my technical toolkit by self-learning new programming languages and staying abreast of industry advancements. This self-directed growth ensures that I can always bring fresh perspectives and cutting-edge solutions to the table.</p>
                <div className="name">
                    <h1>Aliceson Phillips-Buturla</h1>
                </div>
            {/* <p>📧 Connect with me to discuss how we can collaborate on educational technology initiatives or share insights on software development.</p> */}
        </div> {/* end info div */}

            </div>  {/* end container div */}
        </section>

            {/* <Contact /> */}
        </div> 
    );
};

export default Home;

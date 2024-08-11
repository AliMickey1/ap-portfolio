import React from "react";


function Upper() {
    return (
        <div class="top-container">

            <h1>Hey, I’m Aliceson Phillips and I love building beautiful websites</h1>
            <button class="about-me-btn" onclick="scrollToAboutMe()">
                <span class="btn-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14">
                    <g fill="none" fill-rule="evenodd" stroke="#5FB4A2">
                    <path d="M0 9l8 4 8-4" />
                    <path opacity=".5" d="M0 5l8 4 8-4" />
                    <path opacity=".25" d="M0 1l8 4 8-4" />
                    </g>
                </svg>
                </span> 
                <span>About Me</span> 
            </button> 
            {/* </div>  */}
        </div> 
    );
};

export default Upper;
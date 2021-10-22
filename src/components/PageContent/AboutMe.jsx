import React from "react";



const aboutMySelf =
    "Hello! I’m Alex Smith. Lorem ipsum dolor sit amet, consectetur\
    adipiscing elit. Aenean fermentum ullamcorper sem, at placerat\
    dolor volutpat ac. Duis nulla enim, condimentum nec ultricies.\
"


function AboutMe() {
    return (
        <div className="about-me">
            <div className="block-title">
                <h3>About <span>Me</span></h3>
            </div>
            <p>
                {aboutMySelf}
            </p>
        </div>
    )
};
export default AboutMe;
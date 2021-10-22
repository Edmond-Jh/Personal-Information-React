import React from "react";

function SocialLinks({ links, classs }) {
    return (<div className={classs}>
        {links.map(({ hre, icon }) => (
            <a href={hre} key={icon}><i className={icon}></i></a>
        ))}
    </div>);
}
export default SocialLinks;
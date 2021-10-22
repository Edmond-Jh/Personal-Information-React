import React from "react";
import PhotoImg from "../../../public/images/photo.png"



function Photo({classs }) {
    return (
        
        <div className={classs}>
            <img src={PhotoImg} alt="" />
        </div>)
}
export default Photo;
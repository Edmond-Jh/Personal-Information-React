import React from "react";

const personInfo = [
    {
        Age: "20",
        Residence: "Iran",
        Address: "Tehran , Iran",
        email: "MohamadHossein.Nazari@Yahoo.com",
        Phone: "0935-485-9211",
        Freelance: "Available",
    },
]



function InfoList() {
    let myarrobj=[];
    
    personInfo.map((value)=>{
        myarrobj = Object.entries(value)
    })
    return (
        <ul className="info-list">
            {
            myarrobj.map(([key,value])=>{
                return(
                    <li key={key}>
                        <span className="title">{key}</span>
                        <span className="value">{value}</span>
                    </li>
                )
            })
            }
        </ul>
    )
};
export default InfoList;


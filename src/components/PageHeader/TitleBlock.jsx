import React from "react";

const titleData = [
  "React Js",
  "Front-End Developer",
]
function TitleBlock({ classs, myname, ftitle, stitle }) {
  return (
    <div className={classs}>

      <h2>{myname}</h2>

      <div className="owl-carousel text-rotation">

        <div className="item">
          {
            titleData.map((value) => {
              return (
                <div className="sp-subtitle" key={value}>{value}</div>
              )
            })
          }
        </div>
      </div>

    </div>);
}



export default TitleBlock;

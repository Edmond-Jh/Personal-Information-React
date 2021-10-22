import React from "react";
import AboutMe from "./AboutMe";
import InfoList from "./InfoList"

export default function PageContent() {
    return (
        <div className="page-content">
            <div className="row">

                <div className="col-sm-6 col-md-6 col-lg-6">
                    <AboutMe />
                </div>

                <div className="col-sm-6 col-md-6 col-lg-6">
                    <InfoList />
                </div>
            </div>
        </div>
    )
}




import React from "react";
import TitleBlock from './TitleBlock'
import SocialLinks from './SocialLink'
import Photo from "./Photo"


const links = [
  {
    hre: "https://twiter.com",
    icon: "fa fa-twitter"
  },
  {
    hre: "https://facebook.com",
    icon: "fa fa-facebook"
  },
  {
    hre: "https://instagram.com",
    icon: "fa fa-instagram"
  }
]



function PageHeader({ clas }) {

  return (
    <div className={clas}>

      <div className="row">

        <div className="col-sm-4 col-md-4 col-lg-4">
          <Photo classs="photo"/>
        </div>

        <div className="col-sm-8 col-md-8 col-lg-8">
          <TitleBlock classs="title-block" myname="Mohamad Hossein Nazari" />
          <SocialLinks classs="social-links" links={links} />
        </div>

      </div>

    </div>)
}
export default PageHeader;
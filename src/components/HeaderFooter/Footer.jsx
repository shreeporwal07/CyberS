import React from "react";
import classes from "../Styles/Footer.module.css";
import logo from "../../assets/img/logo.png";
import ImgList from "../Helpers/ImgList";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { useEffect, useRef } from "react";
const Footer = () => {  
  return (
    <div className={classes.footerwrapper}>
      <div className={classes.footer}>
        <div className={classes.logodesc}>
          <h4 className={classes.desc}>Follow us on! </h4>
          <div className={classes.socialmedia}>
            <TwitterIcon className={classes.socialIcon} />
            <InstagramIcon className={classes.socialIcon} />
            <FacebookIcon className={classes.socialIcon} />
            <YouTubeIcon className={classes.socialIcon} />
          </div>
          <img src={logo} alt="logo" className={classes.logo} />
        </div>
        <div className={classes.links}>
          <ul className={classes.ul}>
            <li>Autumn</li>
            <li>Winter</li>
            <li>Casual</li>
            <li>Women</li>
            <li>Urban</li>
          </ul>
        </div>
        <div className={classes.links}>
          <ul className={classes.ul}>
            <li>Watch</li>
            <li>Men</li>
            <li>Spring</li>
            <li>Sport</li>
            <li>Classic</li>
          </ul>
        </div>
        <div className={classes.contact}>
          <h4>New Arrivals!</h4>
          <h4>For Discounts Contact Us</h4>
          <p>Subscribe to get latest on sales, new releases and many more.</p>
          <button>Subscribe!</button>
          <div className={classes.gradientCircle}></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

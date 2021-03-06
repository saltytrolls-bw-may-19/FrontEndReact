import React from "react";

//Styling
import "./Footer.scss";

//Footer Component
const Footer = () => {
  return (
    <div className="footer">
      <ul className="icons">
        <li>
          <a href="/">Twitter</a>
        </li>
        <li>
          <a href="/">Facebook</a>
        </li>
        <li>
          <a href="/">Instagram</a>
        </li>
        <li>
          <a href="/">Pinterest</a>
        </li>
        <li>
          <a href="/">Dribbble</a>
        </li>
        <li>
          <a href="/">Linkedin</a>
        </li>
      </ul>
    </div>
  );
};
export default Footer;

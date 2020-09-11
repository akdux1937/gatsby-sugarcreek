import React from "react"
import {Link} from "gatsby"
import { RiHeart2Line } from "react-icons/ri";

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <p>Sugar Creek Farms. Grassfed beef farm located in Allegan, Michigan. <span className="icon -love"><RiHeart2Line/></span> by <Link to="/">Sugar Creek Farms</Link></p>
      <p>
      <Link to="/contact">Purchase</Link> -
      <Link to="/faq"> FAQs</Link> -
      <Link to="/protocol"> Protocols</Link>
      </p>
    </div>
  </footer>
)

export default Footer
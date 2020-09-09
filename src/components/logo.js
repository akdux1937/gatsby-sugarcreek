import React from "react"
import { Link } from "gatsby"
import logo from '../../static/assets/scf-logo-green.svg'

const Logo = (props) => (
  <div className="site-logo">
    <Link to="/"><img className="svg" src={logo} alt="Sugar Creek Farms" /></Link>
    {/* <Link to="/">{props.title}</Link> */}
  </div>
)

export default Logo
import React from "react"
import MailchimpForm from './MailchimpForm'

const Header = ({children}) => (
  <div>
    <header className="site-header">
      {children}
    </header>
    <MailchimpForm/>
  </div>
)

export default Header
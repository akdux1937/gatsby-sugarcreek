import addToMailchimp from 'gatsby-plugin-mailchimp'
import React, {useState} from 'react'

const MailchimpForm = () => {
  const [email, setEmail] = useState('')
  const [result, setResult] = useState('')

  const _handleSubmit = async e => {
    e.preventDefault()
    const resp = await addToMailchimp(email)
    setEmail('')
    setResult(resp.result)
    console.log(resp)
  }
  const handleChange = event => {
    setEmail(event.target.value)
  }
  return result === "success" ? (
    <div className="mailchimp-form">
      <div className="success-text">
        Thank you!
      </div>
    </div>
  ) : (
    <form
      className="mailchimp-form"
      onSubmit={_handleSubmit}
    >
      <div className="wrapper">
        <input type="hidden" name="form-name" value="contact" />
        <input
          label="Email"
          type="email"
          name="email"
          value={email}
          autoComplete="email"
          onChange={handleChange}
          placeholder="Sign up for farm updates..."
        />
        <button className="button" type="submit">Subscribe</button>
      </div>
    </form>
  )
}

export default MailchimpForm;
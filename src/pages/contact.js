import React from "react"
import Layout from "../components/Layout/Layout"


export default function Contact() {
  return (<Layout>

<form name="contact" netlify>
  <p>
    <label>Name <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Email <input type="email" name="email" /></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
      </Layout>)

}

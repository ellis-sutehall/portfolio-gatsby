import React, { useState } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faUser,
  faEnvelope,
  faCheck,
  faTimes,
  faClipboard,
} from "@fortawesome/free-solid-svg-icons"

const ContactForm = () => {
  const [icon, setIcon] = useState("")

  const checkValue = e => {
    if (e.target.value.trim() !== "") {
      setIcon("faCheck")
    } else {
      setIcon("faTimes")
    }
  }

  const outPutIcon = () => {
    if (icon === "faCheck") {
      return <FontAwesomeIcon icon={faCheck} />
    } else {
      return <FontAwesomeIcon icon={faTimes} />
    }
  }

  return (
    <div className="contact-form">
      <form
        name="contact"
        method="POST"
        action="/thank-you"
        netlify
        id="contact-form"
      >
        <div className="columns">
          <div className="column is-half">
            <input type="hidden" name="contact" value="contact" />
            <div className="field">
              <p className="control has-icons-left has-icons-right">
                <input
                  name="name"
                  className="input"
                  type="text"
                  placeholder="Name*"
                  required
                  id="name"
                  onChange={checkValue}
                />
                <span className="icon is-small is-left">
                  <FontAwesomeIcon icon={faUser} />
                </span>
                <span className="icon is-small is-right">{outPutIcon()}</span>
              </p>
            </div>
          </div>
          <div className="column is-half">
            <div className="field">
              <p className="control has-icons-left has-icons-right">
                <input
                  name="email"
                  className="input"
                  type="email"
                  placeholder="Email*"
                  id="email"
                  onChange={checkValue}
                  required
                />
                <span className="icon is-small is-left">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <span className="icon is-small is-right">{outPutIcon()}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <div className="field">
              <p className="control has-icons-left has-icons-right">
                <input
                  name="subject"
                  type="text"
                  id="subject"
                  className="input"
                  placeholder="Subject*"
                  onChange={checkValue}
                  required
                />
                <span className="icon is-small is-left">
                  <FontAwesomeIcon icon={faClipboard} />
                </span>
                <span className="icon is-small is-right">{outPutIcon()}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <div className="field">
              <textarea
                name="message"
                className="textarea"
                placeholder="Your Message*"
                id="message"
                required
              ></textarea>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <div className="field">
              <div className="control">
                <button className="button is-primary" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ContactForm

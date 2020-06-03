import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faUser,
  faEnvelope,
  faCheck,
  faTimes,
  faClipboard,
} from "@fortawesome/free-solid-svg-icons"

const ContactForm = () => {
  return (
    <div className="contact-form">
      <div className="columns is-centered">
        <div className="column is-half-desktop">
          <form>
            <div className="columns is-mobile">
              <div className="column is-half">
                <div className="field">
                  <p className="control has-icons-left has-icons-right">
                    <input
                      className="input"
                      type="text"
                      placeholder="Name"
                      required
                    />
                    <span className="icon is-small is-left">
                      <FontAwesomeIcon icon={faUser} />
                    </span>
                    <span className="icon is-small is-right">
                      <FontAwesomeIcon icon={faTimes} />
                    </span>
                  </p>
                </div>
              </div>
              <div className="column is-half">
                <div className="field">
                  <p className="control has-icons-left has-icons-right">
                    <input
                      className="input"
                      type="email"
                      placeholder="Email"
                      required
                    />
                    <span className="icon is-small is-left">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                    <span className="icon is-small is-right">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <div className="field">
                  <p className="control has-icons-left has-icons-right">
                    <input
                      type="text"
                      className="input"
                      placeholder="Subject"
                    />
                    <span className="icon is-small is-left">
                      <FontAwesomeIcon icon={faClipboard} />
                    </span>
                    <span className="icon is-small is-right">
                      <FontAwesomeIcon icon={faTimes} />
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <div className="field">
                  <textarea
                    className="textarea"
                    placeholder="Your Message"
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
      </div>
    </div>
  )
}

export default ContactForm

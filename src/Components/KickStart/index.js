import {Component} from 'react'
import Popup from 'reactjs-popup'
import {FaWindowClose} from 'react-icons/fa'
import './index.css'

class KickStart extends Component {
  render() {
    return (
      <>
        <div className="home-page-container">
          <div className="home-page-welcome-container">
            <h1 className="home-page-welcome-container-heading">
              Kick Off you ACCA Prep Journey with IndigoLearn
            </h1>
            <p className="home-page-welcome-container-paragraph">
              sign in and get instant access to your free coursers
            </p>
            <div className="home-page-welcome-container-lists">
              <button
                type="button"
                className="request-button btn red "
                onClick={this.onRequest}
              >
                sign in and get free courses
              </button>
            </div>
          </div>
          <div className="call-us-container">
            <h1 className="home-page-call-us-heading">
              Aspiring to be a ACCA Get in touch with Us!
            </h1>
            <input
              className="home-page-input-container"
              type="input"
              placeholder="Name"
            />
            <input
              className="home-page-input-container"
              type="input"
              placeholder="Mobile Number"
            />
            <input
              className="home-page-input-container"
              type="input"
              placeholder="Email ID"
            />
            <select
              placeholder="Current Qualification"
              className="home-page-input-container"
              defaultValue=""
            >
              <option value="" disabled hidden>
                Current Qualification
              </option>
              <option>Graduation</option>
              <option>Post Graduation</option>
              <option>Intermediate</option>
              <option>SSC</option>
            </select>
            <select
              placeholder="Current Qualification"
              className="home-page-input-container"
              defaultValue=""
            >
              <option value="" disabled hidden>
                Intrested In
              </option>
              <option>Software Development</option>
              <option>Testing</option>
              <option>Devoops</option>
              <option>Management</option>
            </select>

            <Popup
              trigger={
                <button
                  type="button"
                  className="request-button"
                  onClick={this.onRequest}
                >
                  Request a call back
                </button>
              }
              position="top center"
            >
              {close => (
                <div className="display-success">
                  <button type="button" className="close" onClick={close}>
                    <FaWindowClose className="close-icon" />
                  </button>
                  <h1 className="success">
                    Your Request is successfully accepted !
                  </h1>
                </div>
              )}
            </Popup>
          </div>
        </div>
      </>
    )
  }
}
export default KickStart

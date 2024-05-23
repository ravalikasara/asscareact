import {Component} from 'react'
import Popup from 'reactjs-popup'
import {FaBuilding, FaBookOpen, FaDoorOpen, FaWindowClose} from 'react-icons/fa'
import {GiTeacher} from 'react-icons/gi'

import Header from '../Header'
import WhyChooseUs from '../WhyChooseUs'
import WhatYouLearn from '../WhatYouLearn'
import Placements from '../Placements'
import KickStart from '../KickStart'
import './index.css'

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="home-page-container">
          <div className="home-page-welcome-container">
            <h1 className="home-page-welcome-container-heading">
              Become ACCA in 18 months
            </h1>
            <p className="home-page-welcome-container-paragraph">
              Images often contain many different colors, and sometimes you just
              want to know what those colors are exactly! Use this tool to find
              specific color codes from within images.
            </p>
            <ul className="home-page-welcome-container-lists">
              <li className="home-list-item">
                <span>
                  <FaBuilding className="icons" /> Our Institutions
                </span>
                <p className="nums">2,800</p>
              </li>
              <li className="home-list-item">
                <span>
                  <FaBookOpen className="icons" /> Courses
                </span>
                <p className="nums">12,780</p>
              </li>
              <li className="home-list-item">
                <span>
                  <FaDoorOpen className="icons" /> Join Us
                </span>
                <p className="nums">12,780</p>
              </li>
              <li className="home-list-item">
                <span>
                  <GiTeacher className="icons" /> Career Experts
                </span>
                <p className="nums">12,780</p>
              </li>
            </ul>
            <div className="home-page-welcome-container-lists">
              <button
                type="button"
                className="request-button btn"
                onClick={this.onRequest}
              >
                DownLoads exchanges
              </button>
              <button
                type="button"
                className="request-button btn red "
                onClick={this.onRequest}
              >
                lets us know what you want
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
        <WhyChooseUs />
        <WhatYouLearn />
        <Placements />
        <KickStart />
      </>
    )
  }
}
export default Home

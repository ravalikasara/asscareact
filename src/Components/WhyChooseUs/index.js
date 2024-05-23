import {Component} from 'react'

import {HiLightBulb} from 'react-icons/hi'
import {RiSuitcaseFill} from 'react-icons/ri'
import {TiGroupOutline} from 'react-icons/ti'
import './index.css'

class WhyChooseUs extends Component {
  render() {
    return (
      <div className="why-choose-us-container">
        <h1 className="why-choose-us-container-heading">Why Choose us?</h1>
        <hr className="line" />
        <ul className="why-choose-us-lists">
          <li className="why-choose-us-list">
            <HiLightBulb className="why-choose-us-lists-icons" />
            <h1 className="why-choose-us-lists-title">Expert Faculty</h1>
            <p>
              Once you have selected an image, you can see the most common
              colors, as well as, be able to.
            </p>
          </li>
          <li className="why-choose-us-list">
            <TiGroupOutline className="why-choose-us-lists-icons" />

            <h1 className="why-choose-us-lists-title">
              Complete Success Package
            </h1>
            <p>
              Once you have selected an image, you can see the most common
              colors, as well as, be able to.
            </p>
          </li>
          <li className="why-choose-us-list">
            <RiSuitcaseFill className="why-choose-us-lists-icons" />
            <h1 className="why-choose-us-lists-title">Placements</h1>
            <p>
              Once you have selected an image, you can see the most common
              colors, as well as, be able to.
            </p>
          </li>
        </ul>
        <ul className="why-choose-us-footer-list-container">
          <li className="why-choose-us-footer-list">
            <h1 className="footer-heading">Levels</h1>
            <span>Three papers(13)</span>
          </li>
          <li className="why-choose-us-footer-list">
            <h1 className="footer-heading">Duration</h1>
            <span>6-12 months</span>
          </li>
          <li className="why-choose-us-footer-list">
            <h1 className="footer-heading">Exams</h1>
            <span>Qualifying upto</span>
          </li>
          <li className="why-choose-us-footer-list">
            <h1 className="footer-heading">Exemptions</h1>
            <span>upto 9 papers</span>
          </li>
        </ul>
      </div>
    )
  }
}

export default WhyChooseUs

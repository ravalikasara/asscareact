import {Component} from 'react'

import './index.css'

class WhyChooseUs extends Component {
  render() {
    return (
      <div className="what-you-learn-container">
        <h1 className="what-you-learn-container-heading">
          What You Will Learn in ACCA?
        </h1>
        <hr className="line" />
        <ul className="what-you-learn-list-container">
          <li className="what-you-learn-list">
            <h1 className="what-you-learn-list-heading">Knowledge Level</h1>
            <ul className="what-you-learn-list-container-details-lists">
              <li className="what-you-learn-list-description">
                Engeenering and Technology
              </li>
              <li className="what-you-learn-list-description">
                Financial Accounting
              </li>
              <li className="what-you-learn-list-description">
                Cyber security and cyber
              </li>
            </ul>
            <h1 className="what-you-learn-list-heading">3 Papers</h1>
          </li>
          <li className="what-you-learn-list">
            <h1 className="what-you-learn-list-heading">Skills</h1>
            <ul className="what-you-learn-list-container-details-lists">
              <li className="what-you-learn-list-description">
                Auditing and Accounting
              </li>
              <li className="what-you-learn-list-description">
                Indian Consitution
              </li>
              <li className="what-you-learn-list-description">
                Basic Mathematics
              </li>
              <li className="what-you-learn-list-description">
                Financial Management
              </li>
              <li className="what-you-learn-list-description">
                Cooperate social Responsibility
              </li>
            </ul>
            <h1 className="what-you-learn-list-heading">5 Papers</h1>
          </li>
          <li className="what-you-learn-list">
            <h1 className="what-you-learn-list-heading">Proffessional Level</h1>

            <ul className="what-you-learn-list-container-details-lists">
              <h1 className="footer-heading">Complementary</h1>
              <li className="what-you-learn-list-description">
                Engeenering and Technology
              </li>
              <li className="what-you-learn-list-description">
                Financial Accounting
              </li>
              <h1 className="footer-heading">Two out the following</h1>
              <li className="what-you-learn-list-description">
                Engeenering and Technology
              </li>
              <li className="what-you-learn-list-description">
                Financial Accounting
              </li>
            </ul>

            <h1 className="what-you-learn-list-heading">4 Papers</h1>
          </li>
        </ul>
      </div>
    )
  }
}

export default WhyChooseUs

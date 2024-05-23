import {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './Components/Home'
import Placements from './Components/Placements'
import KickStart from './Components/KickStart'
import WhatToLearn from './Components/WhatYouLearn'
import WhyChooseUs from './Components/WhyChooseUs'
import './App.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/kick-start" component={Placements} />
          <Route exact path="/placements" component={KickStart} />
          <Route exact path="/what-you-learn" component={WhatToLearn} />
          <Route exact path="/why-choose-us" component={WhyChooseUs} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App

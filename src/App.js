import React, { Component } from 'react';
import './resources/styles.css';
import Header from './components/header_footer/header';
import Featured from './components/feature/index';
import VenuInfo from './components/feature/VenuInfo';
import HighLights from './components/feature/HighLights';
import Pricing from './components/feature/Pricing';
import Location from './components/feature/Location';
import Footer from './components/feature/Footer';
import { Element } from 'react-scroll';
class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "1500px", background: 'cornflowerblue ' }}>
        <Header />


        <Element name="featured">
          <Featured />
        </Element>

        <Element name="venueinfo">
          <VenuInfo />
        </Element>


        <Element name="highlights">
          <HighLights />
        </Element>


        <Element name="pricing">
          <Pricing />
        </Element>

        <Element name="location">
          <Location />
        </Element>
        <Footer />
      </div>
    );
  }
}

export default App;

import React from 'react';
import CSSModules from 'react-css-modules';

import 'normalize.css';
import styles from './app.scss';

// Components
import Header from './header/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Resume from './sections/Resume';
import Portfolio from './sections/Portfolio';
import Services from './sections/Services';
import Intersection from './sections/Intersection';
import Contact from './sections/Contact';
import Footer from './sections/Footer';


class App extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div styleName="container">
        <Header />
        <Hero />
        <About />
        <Resume />
        <Portfolio />
        <Services />
        <Intersection />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default CSSModules(App, styles);

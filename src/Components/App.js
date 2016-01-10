import React from 'react';
import CSSModules from 'react-css-modules';

import 'normalize.css';
import styles from './app.scss';

// Components
import Header from './Header/Header';
import Hero from './Sections/Hero';
import About from './Sections/About';
import Resume from './Sections/Resume';
import Portfolio from './Sections/Portfolio';
import Services from './Sections/Services';
import Intersection from './Sections/Intersection';
import Contact from './Sections/Contact';
import Footer from './Sections/Footer';


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

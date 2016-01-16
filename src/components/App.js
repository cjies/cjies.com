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
import GoogleAnalytics from './analytics/Google-Analytics';

import { repository, author } from '../../package.json';

class App extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // Console Information
    console.info(
      ' \n' +
      'Behind the scenes: ' + repository.url + ' \n' +
      'I <3 React~~~ Ｏ(≧▽≦)Ｏ \n' +
      ' \n' +
      'Hiring me? ' + author.email
    );
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
        <GoogleAnalytics />
      </div>
    );
  }
}

export default CSSModules(App, styles);

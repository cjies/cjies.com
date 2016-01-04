import React from 'react';
import CSSModules from 'react-css-modules';

import 'normalize.css';
import styles from './app.scss';

// Components
import Header from './Header/Header';
import Hero from './Hero/Hero';
import About from './About/About';

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
      </div>
    );
  }
}

export default CSSModules(App, styles);

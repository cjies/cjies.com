import React from 'react';

import 'normalize.css/normalize.css';
import styles from './app.scss';

// Each Containers
import Header from './Header/Header';
import Hero from './Hero/Hero';
import About from './About/About';
import Resume from './Resume/Resume';
import Portfolio from './Portfolio/Portfolio';
import Skills from './Skills/Skills';
import Intersection from './Intersection/Intersection';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

class App extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  render() {
    return (
      <div className={styles.container}>
        <Header />
        <Hero />
        <About />
        <Resume />
        <Portfolio />
        <Skills />
        <Intersection />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;

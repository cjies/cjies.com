import React from 'react';

import styles from './hero.scss';
import { Section } from 'components';

import SineWaves from 'sine-waves';
import { Link } from 'react-scroll';
import ViewportMetrics from 'react/lib/ViewportMetrics';

let heroWaves = {};

class Hero extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  componentDidMount() {
    // Inital Waves
    heroWaves = this.initialWaves(document.getElementById('waves'));
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    // Paused when start scrolling
    if (ViewportMetrics.currentScrollTop > 10) {
      heroWaves.running = false;
    } else {
      heroWaves.running = true;
    }
  }

  initialWaves(element) {
    const wave = new SineWaves({
      el: element,
      speed: 1.2,
      width: () => {
        return window.innerWidth;
      },
      height: 220,
      ease: 'SineInOut',
      waves: [
        {
          timeModifier: 2,
          lineWidth: 2,
          amplitude: 40,
          wavelength: 100,
          segmentLength: 10,
          type: 'sine',
          strokeStyle: 'rgba(255, 255, 255, 0.4)',
        },
        {
          timeModifier: 1,
          lineWidth: 2,
          amplitude: 20,
          wavelength: 150,
          segmentLength: 1,
          type: 'sine',
          strokeStyle: 'rgba(255, 255, 255, 0.2)'
        },
        {
          timeModifier: 1,
          lineWidth: 2,
          amplitude: 80,
          wavelength: 120,
          segmentLength: 1,
          type: 'sine',
          strokeStyle: 'rgba(255, 255, 255, 0.3)'
        }
      ]
    });
    return wave;
  }

  render() {
    const scrollSmooth = true;
    return (
      <Section
        name="HERO"
        background="primary"
        styles={styles}>
        <canvas id="waves" className={styles['hero-waves']}></canvas>
        <h1>MAKE SIMPLE.</h1>
        <p>Front End Developer</p>
        <Link
          to="ABOUT"
          smooth={scrollSmooth}
          duration={500}
          className={styles['scroll-more']}>
          <i className="fa fa-angle-down fa-2x" />
        </Link>
      </Section>
    );
  }
}

export default Hero;

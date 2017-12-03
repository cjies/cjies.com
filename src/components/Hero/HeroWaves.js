import React, { PureComponent } from 'react';
import styled from 'styled-components';
import SineWaves from 'sine-waves';

class HeroWaves extends PureComponent {
  static defaultProps = {
    isWavesPaused: false,
  };

  componentDidMount() {
    this.heroWaves = this.initialWaves(this.canvasNode);
  }

  componentDidUpdate() {
    if (this.heroWaves) {
      this.heroWaves.running = !this.props.isWavesPaused;
    }
  }

  /**
   * Initial waves
   * @param   {Element}   element
   * @returns {SineWaves}
   */
  initialWaves = element => {
    return new SineWaves({
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
          strokeStyle: 'rgba(255, 255, 255, 0.2)',
        },
        {
          timeModifier: 1,
          lineWidth: 2,
          amplitude: 80,
          wavelength: 120,
          segmentLength: 1,
          type: 'sine',
          strokeStyle: 'rgba(255, 255, 255, 0.3)',
        },
      ],
    });
  };

  render() {
    const {
      isWavesPaused, // eslint-disable-line
      ...props
    } = this.props;

    return (
      <canvas
        {...props}
        ref={ref => {
          this.canvasNode = ref;
        }}
      />
    );
  }
}

export default styled(HeroWaves)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;

  pointer-events: none;
  user-select: none;
`;

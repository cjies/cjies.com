import React, { PureComponent, createRef } from 'react';
import styled from 'styled-components';
import SineWaves from 'sine-waves';

const Canvas = styled.canvas`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;

  pointer-events: none;
  user-select: none;
`;

class Waves extends PureComponent {
  static defaultProps = {
    isWavesPaused: false,
  };

  canvasRef = createRef();

  componentDidMount() {
    this.wavesInst = this.initialWaves(this.canvasRef.current);
  }

  componentDidUpdate() {
    if (this.wavesInst) {
      this.wavesInst.running = !this.props.isWavesPaused;
    }
  }

  /**
   * Initial waves
   * @param   {Element}   element
   * @returns {SineWaves}         - SineWaves instance
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
    return <Canvas ref={this.canvasRef} />;
  }
}

export default Waves;

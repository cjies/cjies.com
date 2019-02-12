// @flow
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

type Props = {
  pause: boolean,
};

class Waves extends PureComponent<Props> {
  wavesInst: any | typeof undefined;
  canvasRef = createRef<HTMLCanvasElement>();

  componentDidMount() {
    if (this.canvasRef.current) {
      this.wavesInst = this.initialWaves(this.canvasRef.current);
    }
  }

  componentDidUpdate() {
    if (this.wavesInst) {
      this.wavesInst.running = !this.props.pause;
    }
  }

  /**
   * Initial waves
   */
  initialWaves = (canvasElem: HTMLCanvasElement) => {
    return new SineWaves({
      el: canvasElem,
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

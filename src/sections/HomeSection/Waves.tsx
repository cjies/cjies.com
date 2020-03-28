import * as React from 'react';
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

type WavesProps = {
  pause: boolean;
};

function Waves({ pause }: WavesProps) {
  const [wavesInst, setWavesInst] = React.useState<typeof SineWaves>(null);
  const canvasEl = React.useRef<HTMLCanvasElement>(null);

  /**
   * Initial waves
   */
  const initialWaves = (canvasElem: HTMLCanvasElement) => {
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

  React.useEffect(() => {
    if (canvasEl.current && !wavesInst) {
      setWavesInst(initialWaves(canvasEl.current));
    }

    if (wavesInst) {
      wavesInst.running = !pause;
    }
  }, [wavesInst, pause]);

  return <Canvas ref={canvasEl} />;
}

export default Waves;

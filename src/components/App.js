import React from 'react';
import { injectGlobal } from 'styled-components';

import AppHeader from './AppHeader';

import 'normalize.css/normalize.css';

/**
 * Export global css
 */
injectGlobal`
  html,
  body {
    margin: 0;
    width: 100%;
    height: 100%;

    color: #444;
    background-color: #f5f5f5;

    font-family: "Open Sans", Helvetica, san-serif;
    font-size: 14px;
    line-height: 1.2;
  }

  a {
    color: inherit;
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0.05);
  }

  * {
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <div>
      <AppHeader />
      <div style={{ height: 2000 }}>hello World!</div>
    </div>
  );
}
export default App;

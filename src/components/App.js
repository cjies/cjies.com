import React, { Fragment } from 'react';
import { injectGlobal } from 'styled-components';

import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import Hero from './Hero';

// Normalize default stylesheets
import 'normalize.css/normalize.css';

// Export global css
injectGlobal`
  html,
  body {
    margin: 0;
    width: 100%;
    height: 100%;

    color: #444;
    background-color: #f5f5f5;

    font-family: "Open Sans", Helvetica, san-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.2;
  }

  a {
    color: inherit;
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0.05);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  ::selection {
    color: #fff;
    background-color: rgba(16, 49, 142, .8);
  }

  * {
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <Fragment>
      <AppHeader />
      <Hero />
      <div style={{ height: 200 }}>hello World!</div>
      <AppFooter />
    </Fragment>
  );
}
export default App;

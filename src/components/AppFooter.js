import React from 'react';
import styled from 'styled-components';

import SocialLinks from './shared/SocialLinks';

// Get current year
const currentYear = new Date().getFullYear();

function AppFooter({ ...props }) {
  return (
    <footer {...props}>
      <div className="container">
        <span>© {currentYear} Jies Design.</span>
        <SocialLinks className="links" />
      </div>
    </footer>
  );
}

export default styled(AppFooter)`
  background-color: #f5f5f5;
  border-top: 1px solid #ededed;

  .container {
    max-width: 960px;
    margin: 0 auto;
    padding: 30px;

    display: flex;
    align-items: center;
  }

  .links {
    margin-left: auto;
  }

  @media (max-width: 639px) {
    .container {
      display: block;
      text-align: center;
    }

    .links {
      margin-top: 20px;
    }
  }
`;

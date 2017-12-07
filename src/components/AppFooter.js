import React from 'react';
import styled from 'styled-components';

import SocialLinks from './shared/SocialLinks';

// Get current year
const currentYear = new Date().getFullYear();

const StyledSocialLinks = styled(SocialLinks)`
  margin-left: auto;
`;

const FooterContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 30px;

  display: flex;
  align-items: center;
`;

const Footer = styled.footer`
  background-color: #f5f5f5;
  border-top: 1px solid #ededed;

  @media (max-width: 639px) {
    ${StyledSocialLinks} {
      margin-top: 20px;
    }

    ${FooterContainer} {
      display: block;
      text-align: center;
    }
  }
`;

function AppFooter({ ...props }) {
  return (
    <Footer {...props}>
      <FooterContainer>
        <span>© {currentYear} Jies Design.</span>
        <StyledSocialLinks />
      </FooterContainer>
    </Footer>
  );
}

export default AppFooter;

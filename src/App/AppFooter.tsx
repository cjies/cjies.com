import React from 'react';
import styled from 'styled-components';

import SocialLinks from 'shared/SocialLinks';

// Get current year
const currentYear = new Date().getFullYear();

const Footer = styled.footer`
  background-color: #f5f5f5;
  border-top: 1px solid #ededed;
`;

const StyledSocialLinks = styled(SocialLinks)`
  margin-left: auto;

  @media (max-width: 639px) {
    margin-top: 20px;
  }
`;

const FooterContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 30px;

  display: flex;
  align-items: center;

  @media (max-width: 639px) {
    display: block;
    text-align: center;
  }
`;

function AppFooter() {
  return (
    <Footer>
      <FooterContainer>
        <span>2018 - {currentYear} © Jies Design</span>
        <StyledSocialLinks />
      </FooterContainer>
    </Footer>
  );
}

export default AppFooter;

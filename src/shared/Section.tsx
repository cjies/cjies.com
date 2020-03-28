import * as React from 'react';
import styled from 'styled-components';

type SectionProps = {
  id: string;
  title: React.ReactNode;
  children: React.ReactNode;
  isDimmedBackground?: boolean;
};

type StyledSectionProps = {
  isDimmedBackground?: boolean;
};

const StyledSection = styled.section<StyledSectionProps>`
  background-color: ${({ isDimmedBackground }) =>
    isDimmedBackground ? '#f5f5f5' : '#fff'};
`;

const SectionContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 120px 30px;
`;

const SectionTitle = styled.h1`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  padding: 30px 0;
  margin-bottom: 10px;
  font-size: 1.5rem;
  line-height: 1.5;
  color: #343442;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 10px;
    width: 50px;
    height: 1px;
    background-color: #ccc;
  }

  @media (max-width: 639px) {
    justify-content: center;

    &::before {
      left: 50%;
      margin-left: -25px;
    }
  }
`;

function Section({ id, title, children, ...props }: SectionProps) {
  return (
    <StyledSection id={id} {...props}>
      <SectionContainer>
        {title && <SectionTitle>{title}</SectionTitle>}
        {children}
      </SectionContainer>
    </StyledSection>
  );
}

export default Section;

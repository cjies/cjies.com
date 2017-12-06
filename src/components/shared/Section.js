import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 120px 30px;
`;

const SectionTitle = styled.h1`
  position: relative;
  padding: 30px 0;
  margin-bottom: 10px;
  font-size: 21px;
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
`;

function Section({ id, title, isDimmedBackground, children, ...props }) {
  return (
    <section id={id} {...props}>
      <SectionContainer>
        {title && <SectionTitle>{title}</SectionTitle>}
        {children}
      </SectionContainer>
    </section>
  );
}

export default styled(Section)`
  background-color: ${({ isDimmedBackground }) =>
    isDimmedBackground ? '#f5f5f5' : '#fff'};
`;

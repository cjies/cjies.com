// @flow
import React from 'react';
import styled from 'styled-components';

import Section from 'shared/Section';

import { RESUME_SECTION } from 'data/sections';
import RESUMES from 'data/resumes';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const ListItem = styled.li`
  flex: 0 0 50%;
  padding-right: 10px;
  margin-bottom: 20px;

  display: flex;
  align-items: center;

  @media (max-width: 639px) {
    flex-basis: 100%;
    padding-right: 0;
    margin-bottom: 30px;
  }
`;

const ResumeLabel = styled.div`
  min-width: 100px;
  width: 100px;
  padding: 0 20px;
  text-align: center;
`;

const ResumeText = styled.div`
  padding-left: 20px;
  border-left: 1px solid #ccc;

  h2,
  h4 {
    font-weight: normal;
  }

  p {
    padding-top: 10px;
    color: #b0b0b0;
  }
`;

function ResumeSection() {
  return (
    <Section
      isDimmedBackground
      id={RESUME_SECTION.id}
      title={RESUME_SECTION.title}
    >
      <List>
        {RESUMES.map((item, i) => (
          <ListItem key={`resume-${i}`}>
            <ResumeLabel>{item.duration}</ResumeLabel>
            <ResumeText>
              <h2>{item.title}</h2>
              <h4>{item.unit}</h4>
              <p>{item.description}</p>
            </ResumeText>
          </ListItem>
        ))}
      </List>
    </Section>
  );
}

export default ResumeSection;

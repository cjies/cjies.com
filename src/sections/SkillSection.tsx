import React from 'react';
import styled from 'styled-components';

import Section from 'shared/Section';
import { animFlipCoin } from 'shared/keyframes';

import { SKILL_SECTION } from 'data/sections';
import SKILLS from 'data/skills';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const SkillItem = styled.li`
  flex: 0 0 50%;
  padding: 0 10px;
  margin-bottom: 40px;
  text-align: center;

  h2 {
    margin-top: 20px;
  }

  p {
    margin-top: 10px;
    line-height: 1.3;
    color: #b0b0b0;
  }

  @media (max-width: 639px) {
    flex-basis: 100%;
  }
`;

const SkillLogo = styled.i`
  display: inline-block;
  width: 100px;
  height: 100px;
  font-size: 28px;
  line-height: 100px;
  border-radius: 50%;

  background-color: #fff;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);

  &::before {
    vertical-align: center;
  }

  &:hover {
    animation: ${animFlipCoin} 1s forwards ease-in-out;
  }
`;

function SkillSection() {
  return (
    <Section
      isDimmedBackground
      id={SKILL_SECTION.id}
      title={SKILL_SECTION.title}
    >
      <List>
        {SKILLS.map((item, i) => (
          <SkillItem key={`resume-${i}`}>
            <SkillLogo className={item.icon} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </SkillItem>
        ))}
      </List>
    </Section>
  );
}

export default SkillSection;

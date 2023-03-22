import React from 'react';
import styled from 'styled-components';


const Elements = ({setPage}) => {

  const welcome = () => {
    setPage("welcome");
  }
  
  return (
  <ElementsContainer>

    <Heading>Elements of Knowing</Heading>

    <Paragraph>
    With Hunch you can add little elements throughout your notes that help give addition context about your ideas.
    </Paragraph>

    <Paragraph>
    Examples of these elements include: Unanswered questions, Different hunches you have, Decisions you want to make, and Criteria that you are holding in mind.
    </Paragraph>

    <Paragraph>
    These elements are importance context for those contributing your ideas. You can also create complete custom elements to add different types of context to your ideas.
    </Paragraph>

    <Paragraph>
    Over time the app will have more types of elements to give context about your idea, and get other types of aspect from the contributions of others.
    </Paragraph>

    <Paragraph>
    In this way <HunchLink onClick={welcome}>Hunch</HunchLink> gives you a way to provide more context to your ideas for better contribution from others.
    </Paragraph>
    
  </ElementsContainer>
)};

const ElementsContainer = styled.div`
  position: relative;
  height: 80%;
  width: 50%;
  padding-top: 5%;
  padding-bottom: 5%;
  @media (max-width: 768px) {
    position: static;
    width: 100%;
    max-width: 100%; 
    padding: 0 20px;
    left: 20%;
  }
`;

const Heading = styled.h1`
  font-size: 2.5em;
  font-weight: 800;
  line-height: 1.2;

  @media (max-width: 768px) {
    padding-bottom: 20px;
  }
`;

const Paragraph = styled.div`
  line-height: 2;
  padding-bottom: 21px;
`;


const HunchLink = styled.div`
  padding: 1px 4px;
  background: #6A27BF;
  color: #efefef;
  border-radius: 3px;
  cursor: pointer;
  display: inline-block;
  text-decoration: inherit;
  white-space: normal;
  line-height: 1.5;
`;

export default Elements;

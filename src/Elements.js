import React from 'react';
import styled from 'styled-components';


const Elements = ({setPage}) => {

  const welcome = () => {
    setPage("welcome");
  }
  
  return (
  <ElementsContainer>

    <Heading>Note Elements</Heading>

    <Paragraph> 
    Often when you share a google doc or other collaborative note, they can quickly become messy and incoherent.
    </Paragraph> 

    <Paragraph>
    With Hunch you can add little elements throughout your notes that help structure your conversations.
    </Paragraph>

    <Paragraph>
    At the start of a new line you use the ":" syntax to add an element. For example, at the start of a new line you can type ":q" to add a question element, or ":d" to add a decision element.
    </Paragraph>

    <Paragraph>
    In this way <HunchLink onClick={welcome}>Hunch</HunchLink> gives you an easy way to add these elements and keep your notes structured.
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

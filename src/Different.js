import React from 'react';
import styled from 'styled-components';


const Assistant = ({setPage}) => {

  const welcome = () => {
    setPage("welcome");
  }

  const elements = () => {
    setPage("elements");
  }
  
  return (
  <AssistantContainer>

    <Heading>Different Take</Heading>

    <Paragraph> 
    At the core of Hunch is the idea of that we need different takes on our thinking to make them robust and helpful to others.
    </Paragraph> 

    <Paragraph>
    Getting stuck in our own ideas is a common trap. Modern advice is to put your ideas our to others to test them. Hold your ideas lightly and focus on what is actually needed.
    </Paragraph>

    <Paragraph>
    This advice is good, but it not always easy to put your ideas out there, or even start a conversation purely about a problem that people face. 
    </Paragraph>

    <Paragraph>
    In light of this the app makes it easy to share your notes with different <HunchLink onClick={elements}> Elements of Knowing </HunchLink> to get contributions for other people and AI contributors.
    </Paragraph>

    <Paragraph>
    In <HunchLink onClick={welcome}>Hunch</HunchLink> your notes are structured as a network where you can link any note to any other, and redo your links when you want. So you can remap your ideas as they change.
    </Paragraph>
    
  </AssistantContainer>
)};

const AssistantContainer = styled.div`
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

export default Assistant;

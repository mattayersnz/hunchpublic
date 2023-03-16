import React from 'react';
import styled from 'styled-components';

const HunchEditor = () => (
  <HunchEditorContainer>

    <Heading>Welcome to Hunch</Heading>

    <Paragraph> 
    Hunch is a note app designed to help you form your ideas with the views of others
    </Paragraph> 

    <Paragraph>
    The <HunchLink>powerful intelligence</HunchLink> built into hunch will help build on your notes with the vast array of views from people around world
    </Paragraph>

    <Paragraph>
    You can also invite those you know to join you in forming your ideas, adding <HunchLink> note elements </HunchLink> like questions, decisions to be made, or tasks to complete to structure your conversations
    </Paragraph>

    <Paragraph>
    Great ideas are formed from multiple views, join the waitlist below and follow your hunches.
    </Paragraph>
    
  </HunchEditorContainer>
);

const HunchEditorContainer = styled.div`
  position: relative;
  flex: 1;
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

const Paragraph = styled.p`
  line-height: 2;
`;


const HunchLink = styled.div`
  padding: 1px 4px;
  background: #6A27BF;
  color: white;
  border-radius: 3px;
  cursor: pointer;
  display: inline-block;
  text-decoration: inherit;
  white-space: normal;
  line-height: 1.5;
`;

export default HunchEditor;

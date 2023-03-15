import React from 'react';
import styled from 'styled-components';

const HunchEditor = () => (
  <HunchEditorContainer>

    <Heading>Welcome to Hunch</Heading>

    <Paragraph> 
      Hunch is a note app built to help you form your thoughts. 
    </Paragraph>
    <Paragraph>
      It has a minimalist, elegant design, where you can start to capture what you are thinking about. 
    </Paragraph>
    <Paragraph>
      Then you give your note <HunchLink>purpose</HunchLink> and <HunchLink> collaborate </HunchLink> with others.
    </Paragraph>

    <Paragraph>
      I'll shortly be opening up Hunch to the public.
    </Paragraph>
    
  </HunchEditorContainer>
);

const HunchEditorContainer = styled.div`
  position: relative;
  top: 15%;
  left: 25%;
  height: 80%;
  width: 50%;

  @media (max-width: 768px) {
    left: 20%;
    width: 60%;
    height: 100%;
    padding-bottom: 100px;
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

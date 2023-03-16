import React from 'react';
import styled from 'styled-components';


const Assistant = ({setPage}) => {

  const welcome = () => {
    setPage("welcome");
  }
  
  return (
  <AssistantContainer>

    <Heading>Powerful Intelligence</Heading>

    <Paragraph> 
    Inside Hunch you can chat with a virtual assistant to help you form your ideas.
    </Paragraph> 

    <Paragraph>
    The assistant has the context of your current note, so you can instantly get it's views on the content of what you have written. This saves you constantly needing to add this context to your chat.
    </Paragraph>

    <Paragraph>
    The strength of the assistant is that it can also use the vast array of views from people around world to help build on your thoughts.
    </Paragraph>

    <Paragraph>
    <HunchLink onClick={welcome}>Hunch</HunchLink> is a powerful tool in this regard.
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

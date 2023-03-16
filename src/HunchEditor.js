import React, { useState } from 'react';
import styled from 'styled-components';
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { uid } from 'uid';


const firebaseConfig = {
  apiKey: "AIzaSyDXupeVbSkHNU3_hCIkqOLYsItBcrnZK4g",
  authDomain: "hunch-5e6b8.firebaseapp.com",
  projectId: "hunch-5e6b8",
  storageBucket: "hunch-5e6b8.appspot.com",
  messagingSenderId: "872972959561",
  appId: "1:872972959561:web:1a98ff9e501ab063b8a498",
  measurementId: "G-NFTC2ZJ1Y9"
};

const app = initializeApp(firebaseConfig);


const HunchEditor = ({setPage}) => {

  // Change Pages
  const assistant = () => {
    setPage("assistant");
  }

  const elements = () => {
    setPage("elements");
  }


  // Capture Email Address
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const db = getFirestore(app);
    const newId = uid();
    const emailRef = doc(db, "waitlist", newId);
    
    try {
      await setDoc(emailRef, { id: newId, email: email }, { merge: true });
      console.log("Email saved to Firestore!");
    } catch (error) {
      console.error("Error saving email to Firestore: ", error);
    }
    setEmail('');
  };
  
  
  return (
  <HunchEditorContainer>

    <Heading>Welcome to Hunch</Heading>

    <Paragraph> 
    Hi, my name is Matt, and I'm the founder of Hunch, which is a note app designed to help you form your ideas with the views of others.
    </Paragraph> 

    <Paragraph>
    The <HunchLink onClick={assistant}> Powerful Intelligence </HunchLink> built into hunch will help build on your notes with the vast array of views from people around world.
    </Paragraph>

    <Paragraph>
    You can also invite those you know to join you in forming your ideas, adding <HunchLink onClick={elements}> Note Elements </HunchLink> like questions, decisions to be made, or tasks to complete to structure your contributions.
    </Paragraph>

    <Paragraph>
    Hunch will be $US12/mth so that I have the money to continue to enhance it. Please join the waitlist below and I'll get you setup.
    </Paragraph>

    <Form onSubmit={handleSubmit}>
      <Input type="email" placeholder="Type your email here..." value={email} onChange={handleEmailChange} className="input"/>
      <Button type="submit">Join Waitlist</Button>
    </Form>
    
  </HunchEditorContainer>
)};

const HunchEditorContainer = styled.div`
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

const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  height: 30px;
  border: 1px solid #efefef;
  border-radius: 5px;
  padding: 0 10px;
  font-size: 1em;
  outline: none;
  background: transparent;
  color: #efefef;
  &::placeholder {
    color: #4F4F4F; 
  }
`;

const Button = styled.button`
  height: 30px;
  border: 1px solid #efefef;
  border-radius: 3px;
  font-size: 1em;
  background: #efefef;
  color: #212224;
  cursor: pointer;
  outline: none;
  min-width: fit-content;
  margin-left: 10px;
`;

export default HunchEditor;

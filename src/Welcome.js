import React, { useState } from 'react';
import styled from 'styled-components';
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { uid } from 'uid';
import { Link as RouterLink } from 'react-router-dom';


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


const Welcome = () => {

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
  <WelcomeContainer>

    <Heading>Welcome to Hunch</Heading>

    <LeadParagraph> 
    A note app for founders, designers and creators to get different views on your ideas.
    </LeadParagraph> 

    <Paragraph>
    Ideas are important. It is popular today to focus on problems instead of ideas, but choosing which problem to focus on often involves take intuitive leaps from fragile ideas. A new idea can reveal a <Link to="/different"><HunchLink> Different Take </HunchLink></Link> on a problem, leading to new directions.
    </Paragraph>

    <Paragraph>
    The challenge with discussing ideas is that most of what we know we can't articulate. Our ideas come from observations, intuitions, emotions and experience. This is part of what makes us human and great at creating. Hunch helps you include some of these <Link to="/elements"><HunchLink> Elements of Knowing </HunchLink></Link> as you collaborate with others.
    </Paragraph>

    <Paragraph>
    Hunch is $US10/mth to use, so please join the waitlist below and I'll get you setup.
    </Paragraph>

    <Form onSubmit={handleSubmit}>
      <Input type="email" placeholder="Type your email here" value={email} onChange={handleEmailChange} className="input"/>
      <Button type="submit">Join Waitlist</Button>
    </Form>
    
  </WelcomeContainer>
)};

const WelcomeContainer = styled.div`
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

const LeadParagraph = styled.div`
  line-height: 2;
  padding-bottom: 21px;
  font-weight: 500;
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

const Link = styled(RouterLink)`
  text-decoration: none;
`;

const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
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
    color: #efefef; 
    font-weight: 300;
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

export default Welcome;

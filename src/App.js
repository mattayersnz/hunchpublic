import React, { useState } from 'react';
import './index.css';
import { uid } from 'uid';
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import styled from 'styled-components';
import Links from './images/Links.png';
import Blocks from './images/Blocks.png';
import Share from './images/Share.png';
import Graph from './images/Graph.png';
import LinksMobile from './images/LinksMobile.png';
import BlocksMobile from './images/BlocksMobile.png';
import ShareMobile from './images/ShareMobile.png';
import GraphMobile from './images/GraphMobile.png';

const firebaseConfig = {
  // Your Firebase configuration object
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const App = () => {

  // Component State
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const isMobilePlatform = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Save the email to Firestore
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
    setSubmitted(true);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <Container>
      <Hero>A note app for your hunches.</Hero>
      <Questions>
        <FirstQuestion>What do you do with a hunch? <br /> </FirstQuestion>
        Write it down? <br />
        Lose it? <br />
      </Questions>
      <Statement>
        What if you put it in context?<br />
        {/* Add your images here */}
        <Image src={isMobilePlatform ? LinksMobile : Links} alt="Screenshot of how links work in hunch" />
      </Statement>
      <Statement>
        What if you got contributions?<br />
        {/* Add your images here */}
        <Image src={isMobilePlatform ? ShareMobile : Share} alt="Screenshot of how to share a note in hunch" />
      </Statement>
      <Statement>
        What if you progress it?<br />
        {/* Add your images here */}
        <Image src={isMobilePlatform ? BlocksMobile : Blocks} alt="Screenshot of how to progress a hunch with questions and actions" />
      </Statement>
      <Statement>
        What if you had many hunches?<br />
        {/* Add your images here */}
        <Image src={isMobilePlatform ? GraphMobile : Graph} alt="Screenshot of how to view all notes in hunch in a graph view" />
      </Statement>
      <Waitlist>
        <Invite>Join the waitlist</Invite>
        <form onSubmit={handleSubmit}>
          <InputContainer>
            <EmailInput
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Your email"
            />
            <JoinButton type="submit">Join</JoinButton>
          </InputContainer>
        </form>
        {submitted && <ThankYouMessage>Thanks, you are on the waitlist</ThankYouMessage>}
      </Waitlist>
    </Container>
  );
};

const Container = styled.div`
  font-family: 'Inter', sans-serif;
  font-weight: 900;
  background-color: #212121;
  color: #4F4F4F;
  margin: 0;
`;

const Hero = styled.div`
  font-size: 160px;
  text-align: left;
  padding-top: 30vh;
  padding-left: 5vw;
  padding-bottom: 40vh;
  background: -webkit-linear-gradient(45deg, #6A27BF, #CC413B);
  -webkit-background-clip: text;
  color: transparent;
  width: 80%;
  @media (max-width: 960px) {
    font-size: 60px;
    padding-left: 10vw;
    padding-top: 20vh;
  }
`;

const FirstQuestion = styled.div`
  background: -webkit-linear-gradient(45deg, #6A27BF, #CC413B);
  -webkit-background-clip: text;
  color: transparent;
`;

const Questions = styled.div`
  font-size: 60px;
  text-align: left;
  padding-top: 100px;
  padding-left: 10vw;
  padding-bottom: 60vh;
  width: 80%;
  @media (max-width: 960px) {
    font-size: 40px;
    padding-left: 10vw;
  }
`;

const Statement = styled.div`
  font-size: 60px;
  text-align: left;
  padding-top: 100px;
  padding-left: 10vw;
  padding-bottom: 60vh;
  width: 80%;
  background: -webkit-linear-gradient(45deg, #6A27BF, #CC413B);
  -webkit-background-clip: text;
  color: transparent;
  @media (max-width: 960px) {
    font-size: 40px;
    padding-left: 5vw;
    width: 90%;
  }
`;


const Image = styled.img`
  display: block;
  margin-top: 20px;
  margin-bottom: 20px;
  height: auto;
  width: 100%;
  border: 1px solid rgba(239, 239, 239, 0.3);
  border-radius: 10px;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.1);
  @media (max-width: 960px) {
    border-radius: 3px;
  }
`;


const Waitlist = styled.div`
  text-align: left;
  font-size: 60px;
  padding-top: 50vh;
  padding-left: 10vw;
  padding-bottom: 50vh;
  width: 80%;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  @media (max-width: 960px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const Invite = styled.div`
  background: -webkit-linear-gradient(45deg, #6A27BF, #CC413B);
  -webkit-background-clip: text;
  color: transparent;
  font-size: 40px;
`;

const EmailInput = styled.input`
  padding: 10px 15px;
  font-size: 16px;
  background-color: #212121;
  border-radius: 5px;
  color: #EFEFEF;
  outline: none;
  width: 30vw;
  &::placeholder {
    color: #4F4F4F;
  }
  @media (max-width: 960px) {
    font-size: 16px;
    width: 90%;
  }
`;

const JoinButton = styled.button`
  padding: 10px 15px;
  font-weight: 600;
  margin-left: 10px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  background-color: #EFEFEF;
  color: #212121;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  @media (max-width: 960px) {
    font-size: 16px;
    margin-left: 0;
    margin-top: 10px;
    width: 30%;
  }
`;


const ThankYouMessage = styled.div`
  font-size: 24px;
  color: #4F4F4F;
  background-color: transparent;
  margin-top: 20px;
`;


export default App;
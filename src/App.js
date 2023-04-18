import React, { useState } from 'react';
import './index.css';
import { uid } from 'uid';
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import styled from 'styled-components';
import Blocks from './images/Blocks.png';
import BlocksMobile from './images/BlocksMobile.png';
import Graph from './images/Graph.png';
import GraphMobile from './images/GraphMobile.png';

const firebaseConfig = {
  apiKey: "AIzaSyDXupeVbSkHNU3_hCIkqOLYsItBcrnZK4g",
  authDomain: "hunch-5e6b8.firebaseapp.com",
  projectId: "hunch-5e6b8",
  storageBucket: "hunch-5e6b8.appspot.com",
  messagingSenderId: "872972959561",
  appId: "1:872972959561:web:1a98ff9e501ab063b8a498",
  measurementId: "G-NFTC2ZJ1Y9"
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
      <Hero>A note app for designers, creators and innovators.</Hero>
      <Statement>
        Notice the important details
        <Description>
        When you are taking a lot of notes on a project, it is easy to lose the most important parts. Here is a view of a typical note in Hunch where you can add elements like: Questions, Tasks, Decisions to make, Painpoints to solve, and many more.
        </Description>
        <Image src={isMobilePlatform ? BlocksMobile : Blocks} alt="Screenshot of how links work in hunch" />
      </Statement>
      <Statement>
        Stay focused on the important details
        <Description>
        As you get more notes, you can lose the important details in the noise. Here is a view in Hunch where you can see what notes contain the different elements you are interested in.
        </Description>
        <Image src={isMobilePlatform ? GraphMobile : Graph} alt="Screenshot of how to view all notes in hunch in a graph view" />
      </Statement>
      <Waitlist>
        <Invite>Join the waitlist</Invite>
        <Description>
          Hunch is currently in closed beta, but join the waitlist to get access
        </Description>
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
  font-size: 100px;
  text-align: left;
  padding-top: 30vh;
  padding-left: 5vw;
  padding-bottom: 40vh;
  background: -webkit-linear-gradient(45deg, #6A27BF, #CC413B);
  -webkit-background-clip: text;
  color: transparent;
  width: 80%;
  @media (max-width: 960px) {
    font-size: 48px;
    padding-left: 10vw;
    padding-top: 20vh;
  }
`;

const Statement = styled.div`
  font-size: 40px;
  text-align: left;
  padding-top: 200px;
  padding-left: 10vw;
  width: 75%;
  background: -webkit-linear-gradient(45deg, #6A27BF, #CC413B);
  -webkit-background-clip: text;
  color: transparent;
  @media (max-width: 960px) {
    font-size: 28px;
    padding-left: 5vw;
    width: 90%;
  }
`;

const Description = styled.div`
  font-size: 14px;
  font-weight: 200;
  color: #EFEFEF;
  background: none;
  padding-top: 14px;
  width: 80%;
  @media (max-width: 960px) {
    font-size: 14px;
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
  font-size: 40px;
  padding-top: 200px;
  padding-left: 10vw;
  padding-bottom: 50vh;
  width: 80%;
  @media (max-width: 960px) {
    padding-top: 100px;
    padding-left: 5vw;
  }
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
  @media (max-width: 960px) {
    font-size: 24px;
  }
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
  font-size: 18px;
  cursor: pointer;
  background-color: #EFEFEF;
  color: #212121;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  @media (max-width: 960px) {
    font-size: 14px;
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
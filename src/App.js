import React, { useState } from 'react';
import './index.css';
import { uid } from 'uid';
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import styled from 'styled-components';
import Welcome from './images/Welcome.png';
import WelcomeMobile from './images/WelcomeMobile.png';
import Markers from './images/Markers.png';
import MarkersMobile from './images/MarkersMobile.png';
import Contributions from './images/Contributions.png';
import ContributionsMobile from './images/ContributionsMobile.png';
import Network from './images/Network.png';
import NetworkMobile from './images/NetworkMobile.png';

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
      <Hero>A note app for creators.</Hero>
      <HeroImage src={isMobilePlatform ? WelcomeMobile : Welcome} alt="Screenshot of how links work in hunch" />
      <StatementsContainer>
        <StatementWrapper>
          <Statement>
            Note Markers
            <Description>
              Highlight vital elements in your projects: problems to solve, questions, decisions to make, and more.
            </Description>
          </Statement>
          <Image src={isMobilePlatform ? MarkersMobile : Markers} alt="Screenshot of how links work in hunch" />
        </StatementWrapper>
        <StatementWrapper>
          <Statement>
            Focused Collaboration
            <Description>
              Share your notes with refined controls, shaping better collaborations with specific types of contributions.
            </Description>
          </Statement>
          <Image src={isMobilePlatform ? ContributionsMobile : Contributions} alt="Screenshot of how to view all notes in hunch in a graph view" />
        </StatementWrapper>
        <StatementWrapper>
          <Statement>
            Hunch Network
            <Description>
              Follow your hunches by creating and linking new notes about new ideas or challenges, while never losing sight of what is most important.
            </Description>
          </Statement>
          <Image src={isMobilePlatform ? NetworkMobile : Network} alt="Screenshot of how to view all notes in hunch in a graph view" />
        </StatementWrapper>
      </StatementsContainer>
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
  font-size: 180px;
  line-height: 1;
  text-align: left;
  padding-top: 30vh;
  padding-left: 10vw;
  padding-bottom: 20vh;
  background: -webkit-linear-gradient(45deg, #6A27BF, #CC413B);
  -webkit-background-clip: text;
  color: transparent;
  width: 80%;
  @media (max-width: 960px) {
    font-size: 56px;
    padding-left: 10vw;
    padding-top: 20vh;
    padding-bottom: 30vh;
  }
`;

const HeroImage = styled.img`
  display: block;
  width: 80%;
  margin-left: 10vw;
  margin-bottom: 30vh;
  border-radius: 20px;
  background-color: #212121;
  border: 1px solid rgba(239, 239, 239, 0.3);
  @media (max-width: 960px) {
    border-radius: 3px;
  }
`;

const StatementsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 30px;
  padding: 0px 10vw;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;


const StatementWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding-top: 30px;
  padding-left: 10vw;
  padding-right: 10vw;
  padding-bottom: 20px;
  width: 100%;
  background-color: #2c2c2c;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  @media (max-width: 960px) {
    flex-direction: column;
    width: 80%;
  }
`;



const Statement = styled.div`
  font-size: 36px; 
  text-align: left;
  width: 40%;
  margin-bottom: 20px;
  background: -webkit-linear-gradient(45deg, #6A27BF, #CC413B);
  -webkit-background-clip: text;
  color: transparent;
  @media (max-width: 960px) {
    font-size: 24px;
    width: 100%;
  }
`;


const Description = styled.div`
  font-size: 16px;
  font-weight: 200;
  color: #EFEFEF;
  background: none;
  padding-top: 14px;
  width: 80%;
  @media (max-width: 960px) {
    font-size: 14px;
    width: 100%;
  }
`;


const Image = styled.img`
  display: block;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 60%;
  border: 1px solid rgba(239, 239, 239, 0.3);
  border-radius: 10px;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.1);
  @media (max-width: 960px) {
    width: 70vw;
  }
`;



const Waitlist = styled.div`
  text-align: left;
  font-size: 36px;
  padding-top: 200px;
  padding-left: 10vw;
  padding-bottom: 50vh;
  width: 80%;
  @media (max-width: 960px) {
    padding-top: 100px;
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
  font-size: 36px;
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
  font-size: 16px;
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
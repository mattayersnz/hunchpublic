import styled from 'styled-components';
import Welcome from './Welcome';
import Different from './Different';
import Elements from './Elements';
import Signup from './Signup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Container>
        <HunchFrame>
          <ThreeDots />
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/different" element={<Different />} />
            <Route path="/elements" element={<Elements />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </HunchFrame>
      </Container>
    </Router>
  );
}


const Container = styled.div`
  height: 100%;
  width: 100%;
  margin-top: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HunchFrame = styled.div`
  height: 50%;
  width: 70%;
  border: 1px solid #efefef;
  border-radius: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15%;
  @media (max-width: 768px) {
    border: none;
  }
`;

const DotsContainer = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40px;
  @media (max-width: 1080px) {
    display: none;
  }
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
`;

const RedDot = styled(Dot)`
  background-color: #ff5f57;
`;

const YellowDot = styled(Dot)`
  background-color: #febc2e;
`;

const GreenDot = styled(Dot)`
  background-color: #28c840;
`;

const ThreeDots = () => (
  <DotsContainer>
    <RedDot />
    <YellowDot />
    <GreenDot />
  </DotsContainer>
);

export default App;

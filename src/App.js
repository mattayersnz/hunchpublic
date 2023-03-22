import styled from 'styled-components';
import HunchEditor from './HunchEditor';
import Different from './Different';
import Elements from './Elements';
import { useState } from 'react';

function App() {

  const [page, setPage] = useState("welcome");

  function getPage(page) {
    switch (page) {
      case 'welcome':
        return <HunchEditor setPage={setPage}/>;
      case 'different':
        return <Different setPage={setPage}/>;
      case 'elements':
        return <Elements setPage={setPage}/>;
      default:
        return <HunchEditor setPage={setPage}/>;
    }
  }



  return (
    <Container>
      <HunchFrame>
        <ThreeDots />
        {getPage(page)}
      </HunchFrame>
    </Container>
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

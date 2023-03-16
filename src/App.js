import styled from 'styled-components';
import HunchEditor from './HunchEditor';

function App() {
  return (
    <Container>
      <HunchFrame>
        <ThreeDots />
        <HunchEditor />
      </HunchFrame>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HunchFrame = styled.div`
  height: 100%;
  width: 75%;
  border: 1px solid #efefef;
  border-radius: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
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

import styled from 'styled-components';
import HunchEditor from './HunchEditor';

function App() {
  return (
    <div className="App">
      <HunchFrame>
        <ThreeDots />
        <HunchEditor />
      </HunchFrame>
    </div>
  );
}

const HunchFrame = styled.div`
  height: 75vh;
  width: 75vw;
  border: 1px solid #efefef;
  border-radius: 10px;

  @media (max-width: 768px) {
    height: 100vh;
    width: 100vw;
    border: none;
    margin-bottom: 50px;
  }
`;

const DotsContainer = styled.div`
  position: relative;
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

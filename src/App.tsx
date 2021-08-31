import styled from 'styled-components';
import HeaderMenu from './components/HeaderMenu/HeaderMenu';
import Canvas from './components/Canvas/Canvas';

const AppWrapper = styled.div`
height: 100vh;
width: 100%;
`;

const App = () => {
  return (
    <AppWrapper>
      <HeaderMenu />
      <Canvas />
    </AppWrapper>
  );
}

export default App;

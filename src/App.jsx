import styled from "styled-components";
import { FlexCol, COLORS } from "./styles/core/styles";

function App() {
  return (
    <Container>
      <LandingPage>
        <HeaderContainer>
          <h1>Dungeon Battles</h1>
        </HeaderContainer>
        <Menu>
          <StartButton>
            <p>Start</p>
          </StartButton>
          <RegularMenuButton>
            <p>Rules</p>
          </RegularMenuButton>
        </Menu>
      </LandingPage>
    </Container>
  );
}

const Container = styled(FlexCol)`
  height: 99dvh;
  font-size: 100%;
  overflow: hidden;

  font-family: "Megrim", system-ui;
  font-weight: 400;
  font-style: normal;
`;

const LandingPage = styled(FlexCol)`
  justify-content: space-around;

  color: white;
  background-color: black;
`;

const HeaderContainer = styled(FlexCol)`
  height: auto;
  font-size: 400%;
`;

const Menu = styled(FlexCol)`
  height: 50%;
  width: 75%;
  justify-content: space-evenly;
  border-radius: 5px;
`;

const MenuButton = styled(FlexCol)`
  height: 25%;
  width: 50%;
  border-radius: 5px;
  transition: transform 200ms ease-in;
  cursor: pointer;
  font-size: 300%;

  &:hover {
    transform: scale(1.02);
  }
`;

const StartButton = styled(MenuButton)`
  background-image: ${COLORS.START_BTN};
  font-size: 400%;
`;

const RegularMenuButton = styled(MenuButton)`
  background-image: ${COLORS.REG_BTN};
`;

export default App;

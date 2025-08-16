import styled from "styled-components";
import { COLORS, Container, FlexCol } from "@/styles/core/styles";
import { Link } from "react-router-dom";
import { deviceStore } from "@/server";

function LandingPage() {
  console.log("deviceStore", deviceStore);
  return (
    <Container>
      <LandingPageContainer>
        <HeaderContainer>
          <h1>Block Battles</h1>
        </HeaderContainer>
        <Menu>
          <StartButton to="/start">
            <p>Start</p>
          </StartButton>
          <RegularMenuButton to="/rules">
            <p>Rules</p>
          </RegularMenuButton>
        </Menu>
      </LandingPageContainer>
    </Container>
  );
}

const LandingPageContainer = styled(FlexCol)`
  justify-content: space-around;
  color: white;
  background-color: black;
`;

const HeaderContainer = styled(FlexCol)`
  height: auto;
  text-align: center;
  font-size: 300%;
`;

const Menu = styled(FlexCol)`
  height: 50%;
  width: 75%;
  justify-content: space-evenly;
  border-radius: 5px;
`;

const MenuButton = styled(Link)`
  height: 25%;
  width: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: white;
  text-decoration: none;

  border-radius: 5px;
  transition: transform 200ms ease-in;
  cursor: pointer;
  font-size: 300%;

  &:hover {
    transform: scale(1.02);
  }
`;

const StartButton = styled(MenuButton)`
  background-image: ${COLORS.GREEN_BTN};
  font-size: 350%;
`;

const RegularMenuButton = styled(MenuButton)`
  background-image: ${COLORS.YELLOW_BTN};
`;

export default LandingPage;
export { LandingPage };

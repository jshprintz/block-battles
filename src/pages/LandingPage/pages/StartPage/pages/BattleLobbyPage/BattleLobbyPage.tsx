import styled, { css } from "styled-components";
import { COLORS, FlexCol } from "@/styles/core/styles";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { BattleLobbyTeamPreview } from "./Components";
import { deviceStore } from "@/server";

const BattleLobbyPage: React.FC = observer(() => {
  const isMobile: boolean = deviceStore.isMobile;

  return (
    <Container>
      <BattleLobbyPageContainer>
        <HeaderContainer $isMobile={isMobile}>
          <h1>BATTLE LOBBY</h1>
        </HeaderContainer>
        <Menu>
          <OnlineButton $isDisabled={true} to="/battle-lobby">
            <p>Online</p>
          </OnlineButton>
          <CloseByButton $isDisabled={true} to="/battle-lobby">
            <p>Close By</p>
          </CloseByButton>
          <ComputerButton $isDisabled={false} to="/battle/computer">
            <p>Computer</p>
          </ComputerButton>
        </Menu>
        <BattleLobbyTeamPreview />
      </BattleLobbyPageContainer>
      <Link to="/">Return Home</Link>
    </Container>
  );
});

const Container = styled(FlexCol)`
  height: 99dvh;
  font-size: 100%;
  overflow: auto;
  justify-content: space-around;

  font-family: "Barriecito", system-ui;
  font-weight: 400;
  font-style: normal;
`;

const BattleLobbyPageContainer = styled(FlexCol)`
  justify-content: space-around;
  color: white;
  background-color: black;
`;

const HeaderContainer = styled(FlexCol)<{ $isMobile: boolean }>`
  height: ${(p) => (p.$isMobile ? "10%" : "15%")};
  text-align: center;
  font-size: ${(p) => (p.$isMobile ? "200%" : "300%")};
`;

const Menu = styled(FlexCol)`
  height: 50%;
  width: 75%;
  justify-content: space-evenly;
  border-radius: 5px;
`;

const MenuButton = styled(Link)<{ $isDisabled: boolean }>`
  height: 25%;
  width: 250px;

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

  ${(p) =>
    p.$isDisabled &&
    css`
      pointer-events: none;
      cursor: default;
      opacity: 0.5;
      text-decoration: none;
    `}
`;

const OnlineButton = styled(MenuButton)`
  background-image: ${COLORS.GREEN_BTN};
`;

const CloseByButton = styled(MenuButton)`
  background-image: ${COLORS.YELLOW_BTN};
`;

const ComputerButton = styled(MenuButton)`
  background-image: ${COLORS.YELLOW_BTN};
`;

export default BattleLobbyPage;
export { BattleLobbyPage };

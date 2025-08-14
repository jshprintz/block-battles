import styled from "styled-components";
import { observer } from "mobx-react-lite";
import { BattleActualWarriorCard } from "./Components";
import { TeamDataStore, teamDataStore } from "@/server";
import { FlexCol, FlexRow } from "@/styles/core/styles";

interface IBattleActualPageProps {
  opponentStore: TeamDataStore;
}

const BattleActualPage: React.FC<IBattleActualPageProps> = observer(
  ({ opponentStore }) => {
    return (
      <Container>
        <BattleActualPageContainer>
          <HeaderContainer>
            <h1>AHHHHHH</h1>
          </HeaderContainer>
          <h2>Opponent</h2>
          <FlexCol>
            <FlexRow
              style={{ height: "400px", justifyContent: "space-evenly" }}
            >
              {opponentStore.assembledTeam?.map((warrior) => {
                return (
                  <BattleActualWarriorCard
                    key={warrior.id}
                    currentWarrior={warrior}
                  />
                );
              })}
            </FlexRow>
          </FlexCol>
          <h2>User</h2>
          <FlexCol>
            <FlexRow
              style={{ height: "400px", justifyContent: "space-evenly" }}
            >
              {teamDataStore.assembledTeam?.map((warrior) => {
                return (
                  <BattleActualWarriorCard
                    key={warrior.id}
                    currentWarrior={warrior}
                  />
                );
              })}
            </FlexRow>
          </FlexCol>
        </BattleActualPageContainer>
      </Container>
    );
  }
);

const Container = styled(FlexCol)`
  height: 99dvh;
  font-size: 100%;
  overflow: auto;
  justify-content: space-around;

  font-family: "Barriecito", system-ui;
  font-weight: 400;
  font-style: normal;
`;

const BattleActualPageContainer = styled(FlexCol)`
  justify-content: space-around;
  color: white;
  background-color: black;
`;

const HeaderContainer = styled(FlexCol)`
  height: 200px;
  text-align: center;
  font-size: 300%;
`;

export default BattleActualPage;
export { BattleActualPage };

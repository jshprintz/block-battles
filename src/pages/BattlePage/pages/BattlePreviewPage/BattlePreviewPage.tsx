import styled from "styled-components";
import { observer } from "mobx-react-lite";
import { TeamDataStore, teamDataStore } from "@/server";
import { FlexCol, FlexRow } from "@/styles/core/styles";
import { useEffect, useState } from "react";
import { BATTLE_PREVIEW_COUNTDOWN } from "@/Constants";
import { BattleActualPage } from "../BattleActualPage";
import { WarriorCard } from "@/shared";

interface IBattlePreviewPageProps {
  opponentStore: TeamDataStore;
}

// TODO: MAKE RESPONSIVE

const BattlePreviewPage: React.FC<IBattlePreviewPageProps> = observer(
  ({ opponentStore }) => {
    const [seconds, setSeconds] = useState(BATTLE_PREVIEW_COUNTDOWN);
    const isReady: boolean = seconds === 0;

    useEffect(() => {
      if (seconds <= 0) return; // stop when it reaches 0

      const timer = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer); // cleanup on unmount
    }, [seconds]);

    if (isReady) {
      return <BattleActualPage opponentStore={opponentStore} />;
    } else {
      return (
        <Container>
          <BattlePreviewPageContainer>
            <HeaderContainer>
              <h1>BATTLE {seconds}</h1>
            </HeaderContainer>
            <h2>Opponent</h2>
            <FlexCol>
              <FlexRow
                style={{ height: "400px", justifyContent: "space-evenly" }}
              >
                {opponentStore.assembledTeam?.map((warrior) => {
                  return (
                    <WarriorCard key={warrior.id} currentWarrior={warrior} />
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
                    <WarriorCard key={warrior.id} currentWarrior={warrior} />
                  );
                })}
              </FlexRow>
            </FlexCol>
          </BattlePreviewPageContainer>
        </Container>
      );
    }
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

const BattlePreviewPageContainer = styled(FlexCol)`
  justify-content: space-around;
  color: white;
  background-color: black;
`;

const HeaderContainer = styled(FlexCol)`
  height: 200px;
  text-align: center;
  font-size: 300%;
`;

export default BattlePreviewPage;
export { BattlePreviewPage };

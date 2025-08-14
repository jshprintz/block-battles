import { observer } from "mobx-react-lite";
import { useCallback, useEffect } from "react";
import { NUM_OF_WARRIORS_ON_TEAM } from "@/Constants";
import { computerTeamDataStore, warriors } from "@/server";
import { IWarrior } from "@/types/core";
import { randomSkillDistribution } from "@/helpers";
import { BattlePreviewPage } from "@/pages/BattlePage/pages/BattlePreviewPage";
import LoadingPage from "@/pages/LoadingPage/LoadingPage";

const ComputerBattlePage: React.FC = observer(() => {
  const isReady: boolean = computerTeamDataStore.bonusSkillPointCount === 0;
  const setupComputerTeam = useCallback(() => {
    const warriorsList: IWarrior[] = warriors;
    const warriorCount: number = warriorsList.length;

    for (let i = 0; i < NUM_OF_WARRIORS_ON_TEAM; i++) {
      const randomNum = Math.floor(Math.random() * warriorCount);
      const randomWarrior: IWarrior = {
        ...warriorsList[randomNum],
        id: crypto.randomUUID(),
      };
      computerTeamDataStore.addWarrior(randomWarrior);
    }

    randomSkillDistribution(computerTeamDataStore);
  }, []);

  useEffect(() => {
    setupComputerTeam();
  }, [setupComputerTeam]);

  if (isReady) {
    return <BattlePreviewPage opponentStore={computerTeamDataStore} />;
  } else {
    return <LoadingPage />;
  }
});

export default ComputerBattlePage;
export { ComputerBattlePage };

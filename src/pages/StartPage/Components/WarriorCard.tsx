import styled from "styled-components";
import { Menu } from "../../LandingPage/LandingPage";
import { FlexRow } from "../../../styles/core/styles";

export const WarriorCard = () => {
  return (
    <SelectionBox>
      <CardHeader>
        <span>NAME</span>
        <span>CLASS</span>
      </CardHeader>
      <CardImage />
      <CardStatsContainer>
        <CardStats>Power</CardStats>
        <CardStats>Accuracy</CardStats>
        <CardStats>Conditioning</CardStats>
        <CardStats>Speed</CardStats>
        <CardStats>Health</CardStats>
      </CardStatsContainer>
    </SelectionBox>
  );
};

const SelectionBox = styled(Menu)`
  justify-content: space-between;
  border: 2px solid white;
  width: 100%;
  height: 80%;
`;

const CardHeader = styled(FlexRow)`
  height: 40px;
  font-size: 125%;
  padding: 5px;
  justify-content: space-between;
  border-bottom: 2px solid white;
`;

const CardImage = styled.img`
  height: 50%;
  width: 100%;

  border: 1px solid blue;
`;

const CardStatsContainer = styled.ul`
  height: auto;
  width: 100%;
  font-size: 125%;
  list-style: none;
`;

const CardStats = styled.li`
  margin-bottom: 5px;
`;

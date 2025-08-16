import styled from "styled-components";
import { COLORS, FlexCol, FlexRow } from "./styles";

const CardContainer = styled(FlexCol)`
  justify-content: space-between;
  border: 2px solid white;
  border-radius: 5px;
  width: 300px;
  height: auto;
  user-select: none;
`;

const CardHeader = styled(FlexRow)`
  height: 40px;
  font-size: 125%;
  padding: 5px;
  justify-content: space-between;
  border-bottom: 2px solid white;
  user-select: none;
`;

const CardIcon = styled.img`
  height: 20px;
  margin-left: 2px;
`;

const CardImage = styled.img`
  height: 200px;
  width: 200px;
  margin-top: 10px;
  border-radius: 5px;
`;

const CardBody = styled(FlexRow)`
  height: auto;
  width: 100%;
  justify-content: space-between;
`;

const CardStatsContainer = styled.ul`
  height: auto;
  width: 50%;
  font-size: 110%;
  list-style: none;
  user-select: none;
  padding: 5px;
  margin-left: 5px;
`;

const CardTraitsContainer = styled(FlexCol)`
  height: 100px;
  width: 50%;
  justify-content: space-around;
`;

const CardStats = styled.li`
  margin-bottom: 5px;
`;

const TraitClass = styled(FlexRow)`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  user-select: none;
`;

const DomTrait = styled(TraitClass)`
  background-image: ${COLORS.RED_BTN};
`;

const VulnTrait = styled(TraitClass)`
  background-image: ${COLORS.BLUE_BTN};
`;

export {
  CardBody,
  CardContainer,
  CardHeader,
  CardIcon,
  CardImage,
  CardStats,
  CardStatsContainer,
  CardTraitsContainer,
};
export { DomTrait, VulnTrait };

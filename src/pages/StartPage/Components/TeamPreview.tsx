import styled from "styled-components";
import { FlexRow, FlexCol } from "../../../styles/core/styles";

export const TeamPreview = () => {
  return (
    <TeamBox>
      <TeamCard>
        <div>Image</div>
        <div>Class</div>
      </TeamCard>
      <TeamCard>
        <div>Image</div>
        <div>Class</div>
      </TeamCard>
      <TeamCard>
        <div>Image</div>
        <div>Class</div>
      </TeamCard>
      <TeamCard>
        <div>Image</div>
        <div>Class</div>
      </TeamCard>
      <TeamCard>
        <div>Image</div>
        <div>Class</div>
      </TeamCard>
    </TeamBox>
  );
};

const TeamBox = styled(FlexRow)`
  height: 200px;
  border-top: 2px solid white;
  border-bottom: 2px solid white;
  justify-content: space-evenly;
`;

const TeamCard = styled(FlexCol)`
  width: 15%;
  height: 95%;
  border: 1px solid white;
  justify-content: space-around;
  border-radius: 5px;
`;

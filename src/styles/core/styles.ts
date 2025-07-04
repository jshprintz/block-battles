import styled from "styled-components";

// Private
const Default = styled.div`
  margin: 0;
  padding: 0;
  
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;
`;

// Shared
export const FlexCol = styled(Default)`
  flex-direction: column;
`;

export const FlexRow = styled(Default)`
  flex-direction: row;
`;

export const COLORS = {
  START_BTN:
    "linear-gradient(to bottom, #1b5b41, #097347, #008b4a, #00a348, #00bc42, #00bc42, #00bc42, #00bc42, #00a348, #008b4a, #097347, #1b5b41)",
  REG_BTN:
    "linear-gradient(to bottom, #ac9222, #b99f20, #c5ac1c, #d1b918, #ddc711, #ddc711, #ddc711, #ddc711, #d1b918, #c5ac1c, #b99f20, #ac9222)",
};

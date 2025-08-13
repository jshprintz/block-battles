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

export const Container = styled(FlexCol)`
  height: 99dvh;
  font-size: 100%;
  overflow: auto;
  justify-content: space-around;

  font-family: "Barriecito", system-ui;
  font-weight: 400;
  font-style: normal;
`;

export const COLORS = {
  START_BTN:
    "linear-gradient(to bottom, #1b5b41, #097347, #008b4a, #00a34952, #010101, #000000, #000000, #010101, #00a34952, #008b4a, #097347, #1b5b41)",
  REMOVE_BTN:
    "linear-gradient(to bottom, #820000, #a10000, #a10000, #cd000051, #010101, #000000, #000000, #010101, #cd000051, #a10000, #a10000, #820000)",
  REG_BTN:
    "linear-gradient(to bottom, #ac9222, #b99f20, #c5ac1c, #d1b8185c, #010101, #000000, #000000, #010101, #d1b8185c, #c5ac1c, #b99f20, #ac9222)",
};

import styled from "styled-components";

// Private
const Default = styled.div`
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

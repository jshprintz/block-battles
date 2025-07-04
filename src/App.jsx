import styled from "styled-components";
import { FlexCol } from "./styles/core/styles";

function App() {
  return (
    <Container>
      <h1>Hello World</h1>
    </Container>
  );
}

const Container = styled(FlexCol)`
  width: 100dvw;
  height: 100dvh;
`;

export default App;

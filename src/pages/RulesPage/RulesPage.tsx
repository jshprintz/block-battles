import { Link } from "react-router-dom";
import { FlexCol } from "../../styles/core/styles";
import styled from "styled-components";
import { observer } from "mobx-react-lite";

const RulesPage: React.FC = observer(() => {
  return (
    <RulesContainer>
      <HeaderContainer>
        <h1>Rules Page!</h1>
        <h2>Nothing here yet. Come back soon.</h2>
      </HeaderContainer>
      <Link to="/">Return Home</Link>
    </RulesContainer>
  );
});

const RulesContainer = styled(FlexCol)`
  justify-content: space-around;
  color: white;
  background-color: black;

  font-family: "Barriecito", system-ui;
  font-weight: 400;
  font-style: normal;
`;

const HeaderContainer = styled(FlexCol)`
  height: auto;
  text-align: center;
  font-size: 300%;
`;

export default RulesPage;

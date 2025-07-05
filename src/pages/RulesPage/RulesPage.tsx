import { Link } from "react-router-dom";
import { FlexCol } from "../../styles/core/styles";

const RulesPage = () => {
  return (
    <FlexCol>
      <h2>Rules Page</h2>
      <Link to="/">Return Home</Link>
    </FlexCol>
  );
};

export default RulesPage;

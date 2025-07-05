import { Link } from "react-router-dom";
import { FlexCol } from "../../styles/core/styles";

const StartPage = () => {
  return (
    <FlexCol>
      <h2>Start Page</h2>
      <Link to="/">Return Home</Link>
    </FlexCol>
  );
};

export default StartPage;

import { Link } from "react-router-dom";
import styled from "styled-components";

function NotFound() {
  return (
    <Container>
      <Title>404</Title>
      <Message>Sorry, the page you're looking for doesn't exist.</Message>
      <StyledLink to="/">Return to Home</StyledLink>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  text-align: center;

  overflow: hidden;
`;

const Title = styled.h1`
  font-size: 4rem;
  color: #535558;
`;

const Message = styled.p`
  font-size: 1.25rem;
  color: #535558;
  margin: 1rem 0;
`;

const StyledLink = styled(Link)`
  margin-top: 1.5rem;
  font-size: 1rem;
  color: #936221;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
export default NotFound;
export { NotFound };

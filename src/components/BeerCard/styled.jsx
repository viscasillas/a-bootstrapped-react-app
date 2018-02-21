import styled from "styled-components";
const Card = styled.div`
  width: 200px;
  float: left;
  h3,
  p {
    font-family: ${props =>
      props.theme ? props.theme.primaryFont : "Arial Verdana"};
  }
  img {
    width: 200px;
    hehight: 300px;
  }
`;
export { Card };

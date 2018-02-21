import styled from "styled-components";

export const HeaderBox = styled.div`
  height: ${props => (props.height ? props.height : "200px")};
  background: #eee;
  div {
    position: relative;
    height: ${props => (props.height ? props.height : "200px")};
    span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateY(-50%) translateX(-50%);
      font-size: 40px;
      font-weight: bold;
      font-family: ${props =>
        props.theme.primaryFont ? props.theme.primaryFont : "Arial Verdana"};
    }
  }
`;

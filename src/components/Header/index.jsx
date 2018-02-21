import React from "react";
import { HeaderBox } from "./styled";
import theme from "../../config/theme";

export const Header = ({ title }) => {
  return (
    <HeaderBox theme={theme}>
      <div>
        <span>{title}</span>
      </div>
    </HeaderBox>
  );
};

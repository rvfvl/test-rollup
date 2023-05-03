import React from "react";
import { ThemeProvider } from "styled-components";

const ThemeP = ({ children }: any) => {
  return <ThemeProvider theme={{}}>{children}</ThemeProvider>;
};

export default ThemeP;

import React from "react";
import { StyledContainer } from "./Container.styles";
import { motion } from "framer-motion";
import { ReactComponent as Test } from "../../assets/vite.svg";

const Container = ({ children }) => {
  return (
    <StyledContainer
      color="blue"
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 5 }}
    >
      {children}
      <Test />
    </StyledContainer>
  );
};

export default Container;

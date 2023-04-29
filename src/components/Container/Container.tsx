import React, { ReactNode } from "react";
import { StyledContainer } from "./Container.styles";
import { motion } from "framer-motion";
import testSvg, { ReactComponent as Test } from "../../assets/vite.svg";
import Image from "../Image/Image";

const Container = ({
  children,
  color,
}: {
  children: ReactNode;
  color: string;
}) => {
  return (
    <StyledContainer
      color="yellow"
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

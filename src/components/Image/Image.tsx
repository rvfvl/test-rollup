import React from "react";
import { StyledImage } from "./Image.styles";
import img from "../../assets/img1.jpg";

const Image = ({ test }: { test: number }) => {
  return <StyledImage src={img} />;
};

export default Image;

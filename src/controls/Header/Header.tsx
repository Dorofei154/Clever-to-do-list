import React from "react";
import { Props } from "./Header.interfaces";

const Header = ({ text }: { text: string }) => {
  return <h1>{text}</h1>;
};

export { Header };

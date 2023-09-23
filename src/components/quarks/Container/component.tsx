import React, { createElement } from "react";
import { IContainer } from "./type";

let Component: React.FC<IContainer> = ({ children, ...props }: IContainer) =>
  createElement(
    "div",
    {
      ...props,
      className: `container ${
        props.className === "container" ? "" : props.className
      }`,
    },
    children
  );

export default Component;

import React, { createElement, memo } from "react";
import { IComponent } from "src/types";
import { IWithChildren, IWithOnClick, IWithStyle } from "../hoc";

interface IComponentProps
  extends IComponent,
    IWithStyle,
    IWithChildren,
    IWithOnClick {}

let Component: React.FC<IComponentProps> = ({
  children,
  ...props
}: IComponentProps) => createElement("div", props, children);

Component = memo(Component);

export default Component;

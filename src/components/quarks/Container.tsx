import React, { createElement, memo } from "react";
import { IComponent, IWithChildren, IWithOnClick, IWithStyle } from "src/types";

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

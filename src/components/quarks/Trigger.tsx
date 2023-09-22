import { createElement, memo } from "react";
import { IWithChildren, IWithStyle } from "../hoc";

export const Trigger: React.FC<IWithStyle & IWithChildren> = ({
  children,
  ...props
}) => createElement("button", props, children);

let Component = Trigger;

Component = memo(Component);

export default Component;

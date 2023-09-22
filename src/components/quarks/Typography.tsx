import { FC, createElement, memo } from "react";
import { IComponent } from "src/types";
import {
  IWithChildren,
  IWithElementType,
  IWithOnClick,
  IWithStyle,
} from "../hoc";

type Props = IComponent &
  IWithChildren &
  IWithStyle &
  IWithElementType &
  IWithOnClick;

let Component: FC<Props> = ({ as = "p", children, ...props }: Props) =>
  createElement(as, props, children);

Component = memo(Component);

export default Component;

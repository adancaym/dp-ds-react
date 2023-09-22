import { FC, createElement, memo } from "react";
import {
  IComponent,
  IWithChildren,
  IWithElementType,
  IWithOnClick,
  IWithStyle,
} from "src/types";

type Props = IComponent &
  IWithChildren &
  IWithStyle &
  IWithElementType &
  IWithOnClick;

let Component: FC<Props> = ({ as = "p", children, ...props }: Props) =>
  createElement(as, props, children);

Component = memo(Component);

export default Component;

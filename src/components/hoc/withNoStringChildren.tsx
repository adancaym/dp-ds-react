import { Children, FC, createElement } from "react";
import { IComponent } from "src/types";
import { IWithChildren, IWithStyle } from "./types";

export const WithNoStringChildren =
  <T extends IComponent & IWithChildren & IWithStyle>(Component: FC<T>) =>
  (props: T) => {
    const { children } = props;
    const hasString = Children.toArray(children).some(
      (e) => typeof e === "string"
    );
    if (hasString) throw new Error("Component cannot have string children");

    return createElement(Component, props);
  };

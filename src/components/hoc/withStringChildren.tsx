import { Children, FC, createElement } from "react";
import { IComponent, IWithChildren } from "src/types";

export const WithStringChildren =
  <T extends IComponent & IWithChildren>(Component: FC<T>) =>
  (props: T) => {
    const { children } = props;
    const hasString = Children.toArray(children).every(
      (e) => typeof e !== "string"
    );
    if (hasString) throw new Error("Component no have string children");

    return createElement(Component, props);
  };

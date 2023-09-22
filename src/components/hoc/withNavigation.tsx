import { IComponent } from "../../types";
import { Navigation } from "../molecules/navigation/Navigation";
import { NavigationItem } from "../molecules/navigation/components/NavigationItem";
import { IWithNavigation } from "./types";

export const withNavigation =
  <T extends IComponent>({ Component, routes }: IWithNavigation<T>) =>
  (props: T) =>
    (
      <>
        <Navigation router={routes}>
          {routes.map((route) => (
            <NavigationItem {...route} key={route.path} />
          ))}
        </Navigation>
        <Component {...props} />
      </>
    );

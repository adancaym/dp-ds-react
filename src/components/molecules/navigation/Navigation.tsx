import { Children, FC } from "react";
import {
  Container,
  INavigationItem,
  INavigationProps,
  IPositionVariant,
  withBrowserRouter,
  withThemeContext,
} from "src/components";
import { MakeNavigationTheme, useTheme } from "src/theme";

import { Section } from "./components/Section";
import { IComponent } from "src/types";

interface INavigationElementProps extends IComponent {
  children: INavigationItem[];
}

const NavigationElement: FC<INavigationElementProps> = ({ children }) => {
  const positions = ["left", "center", "right"] as IPositionVariant[];

  const { theme } = useTheme();

  const { toolbar, section } = MakeNavigationTheme(theme);

  return (
    <Container style={toolbar} role="navigation">
      {positions.map((position) => (
        <Section
          key={position}
          position={position}
          styles={section}
          children={children}
          data-testid={`${position}-section`}
        />
      ))}
    </Container>
  );
};

let Navigation: FC<INavigationProps> = ({ children = [], router }) => {

  const routes = Children.map( children, ({ props }: INavigationItem) => props ).filter(({ path }) => path);

  const allRoutesExist = routes.every(({ path }) => router.map(({ path: routePath }) => routePath).includes(path));

  const missingRoutes = routes.filter( ({ path }) => !router.map(({ path: routePath }) => routePath).includes(path) );

  const message = `%cMissing routes: ${missingRoutes.map(({ path }) => path).join(", ")}`;

  if (!allRoutesExist) console.log(message, "color: red; font-size: 1.2rem");

  let Element = withThemeContext({ Component: NavigationElement });

  Element = withBrowserRouter({ Component: Element });

  return <Element children={children} />;
};

export default Navigation;

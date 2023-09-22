import {
  Container,
  INavigationItem,
  INavigationProps,
  IPositionVariant,
} from "src/components";
import { Children } from "react";
import { useTheme } from "../../../theme";
import { MakeNavigationTheme } from "../../../theme";
import { Section } from "./components/Section";

export const Navigation = ({ children, router }: INavigationProps) => {
  const positions = ["left", "center", "right"] as IPositionVariant[];

  const { theme } = useTheme();
  const { toolbar, section } = MakeNavigationTheme(theme);

  const routes = Children.map(
    children,
    ({ props }: INavigationItem) => props
  ).filter(({ path }) => path);

  const allRoutesExist = routes.every(({ path }) => {
    return router.map(({ path: routePath }) => routePath).includes(path);
  });

  const missingRoutes = routes.filter(({ path }) => {
    return !router.map(({ path: routePath }) => routePath).includes(path);
  });

  const message = `%cMissing routes: ${missingRoutes
    .map(({ path }) => path)
    .join(", ")}`;

  if (!allRoutesExist) console.log(message, "color: red; font-size: 1.2rem");

  return (
    <Container style={toolbar}>
      {positions.map((position) => (
        <Section
          key={position}
          position={position}
          styles={section}
          children={children}
        />
      ))}
    </Container>
  );
};

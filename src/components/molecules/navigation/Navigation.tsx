import { Children } from 'react';
import { Container, INavigationItem, INavigationProps, IPositionVariant } from 'src/components';
import { MakeNavigationTheme, useTheme } from 'src/theme';

import { Section } from './components/Section';

export const Navigation = ({ children = [], router }: INavigationProps) => {
  const positions = ["left", "center", "right"] as IPositionVariant[];

  const { theme } = useTheme();
  const { toolbar, section } = MakeNavigationTheme(theme);

  const routes = Children.map( children, ({ props }: INavigationItem) => props).filter(({ path }) => path);
  const allRoutesExist = routes.every(({ path }) => router.map(({ path: routePath }) => routePath).includes(path));

  const missingRoutes = routes.filter(({ path }) => !router.map(({ path: routePath }) => routePath).includes(path));

  const message = `%cMissing routes: ${missingRoutes.map(({ path }) => path).join(", ")}`;

  if (!allRoutesExist) console.log(message, "color: red; font-size: 1.2rem");

  return (
    <Container style={toolbar} role='navigation'>
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

import { Children, FC } from 'react';
import { Container, INavigationItem, INavigationProps, IPositionVariant, withBrowserRouter, withThemeContext } from 'src/components';
import { MakeNavigationTheme, useTheme } from 'src/theme';

import { Section } from './components/Section';

let Navigation: FC<INavigationProps> = ({ children = [], router }) => {
  const positions = ["left", "center", "right"] as IPositionVariant[];

  const { theme } = useTheme();
  const { toolbar, section } = MakeNavigationTheme(theme);

  const routes = Children.map( children, ({ props }: INavigationItem) => props).filter(({ path }) => path);
  const allRoutesExist = routes.every(({ path }) => router.map(({ path: routePath }) => routePath).includes(path));

  const missingRoutes = routes.filter(({ path }) => !router.map(({ path: routePath }) => routePath).includes(path));

  const message = `%cMissing routes: ${missingRoutes.map(({ path }) => path).join(", ")}`;

  if (!allRoutesExist) console.log(message, "color: red; font-size: 1.2rem");

  let NavigationElement: FC = () => (
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
  NavigationElement = withBrowserRouter({ Component: NavigationElement });
  NavigationElement = withThemeContext({ Component: NavigationElement });
  return <NavigationElement />;
};



export default Navigation;
import "./App.css";
import { Container, IWith } from "src/components";
import { Typography } from "src/components/quarks";
import { CSSProperties, Children, ReactNode } from "react";
import { IPalette, useTheme } from "./theme";
import { Link, RouteObject } from "react-router-dom";
import { IComponent } from "./types";

type IPositionVariant = "left" | "right" | "center";
interface INavigation {
  path: string;
  label: string;
  position: IPositionVariant;
}

type INavigationItem = ReactNode & {
  props: INavigation;
};

interface INavigationProps {
  children: INavigationItem[];
  router: RouteObject[];
}

interface IMakeNavigationTheme {
  toolbar: CSSProperties;
  section: CSSProperties;
  link: CSSProperties;
}

const MakeNavigationTheme = (pallete: IPalette): IMakeNavigationTheme => {
  return {
    toolbar: {
      width: "100%",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      gap: "1rem",
      backgroundColor: pallete.primary.main,
      color: pallete.text.dark,
      padding: "1rem",
    },
    section: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      gap: "1rem",
      width: "100%",
    },
    link: {
      textDecoration: "none",
      color: "inherit",
    },
  };
};

interface ISecionProps {
  children: INavigationItem[];
  styles?: CSSProperties;
  linkStyle?: CSSProperties;
  position?: IPositionVariant;
}
const Section = ({ children, styles, position = "left" }: ISecionProps) => {
  const routes = Children.map(children, (item: INavigationItem) => item).filter(
    ({ props: { position: pos } }) => pos === position
  );

  return <Container style={styles} children={routes} />;
};

const Navigation = ({ children, router }: INavigationProps) => {
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

const NavigationItem = ({ path, label }: INavigation) => {
  const { theme } = useTheme();
  const { link } = MakeNavigationTheme(theme);
  return (
    <Typography>
      <Link to={path} title={label} style={link} children={label} />
    </Typography>
  );
};

const Component = () => {
  return (
    <Container>
      <Typography>Some text</Typography>
    </Container>
  );
};

type IWithNavigation<T> = IWith<T> & {
  routes: INavigation[];
};

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

export default withNavigation({
  Component,
  routes: [
    {
      path: "/",
      label: "Home",
      position: "left",
    },
    {
      path: "/",
      label: "Home2",
      position: "left",
    },
    {
      path: "/",
      label: "Home2",
      position: "left",
    },
    {
      path: "/",
      label: "Home2",
      position: "left",
    },
    {
      path: "/about",
      label: "About",
      position: "center",
    },
    {
      path: "/contact",
      label: "Contact",
      position: "right",
    },
  ],
});

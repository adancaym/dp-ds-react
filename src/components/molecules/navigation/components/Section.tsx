import { Container, INavigationItem, ISecionProps } from "src/components";
import { Children } from "react";

export const Section = ({
  children,
  styles,
  position = "left",
}: ISecionProps) => (
  <Container
    style={styles}
    children={Children.map(children, (item: INavigationItem) => item).filter(
      ({ props: { position: pos } }) => pos === position
    )}
  />
);

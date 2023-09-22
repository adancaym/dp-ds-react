import { Container } from "src/components";
import { Typography } from "src/components/quarks";
import { withNavigation } from "../components/hoc/withNavigation";

const Component = () => (
  <>
    <Container>
      <Typography>Some text</Typography>
    </Container>
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

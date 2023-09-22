import { Typography } from "src/components/quarks";
import { useTheme } from "../../../../theme";
import { Link } from "react-router-dom";
import { MakeNavigationTheme } from "../../../../theme";
import { INavigation } from "../types/INavigation";

export const NavigationItem = ({ path, label }: INavigation) => {
  const { theme } = useTheme();
  const { link } = MakeNavigationTheme(theme);
  return (
    <Typography>
      <Link to={path} title={label} style={link} children={label} />
    </Typography>
  );
};

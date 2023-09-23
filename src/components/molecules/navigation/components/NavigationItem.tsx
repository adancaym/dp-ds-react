import { useTheme ,MakeNavigationTheme} from "src/theme";
import { Link } from "react-router-dom";
import { INavigation } from "../types/INavigation";

export const NavigationItem = ({ path, label }: INavigation) => {
  const { theme } = useTheme();
  const { link } = MakeNavigationTheme(theme);
  return (<Link to={path} title={label} style={link}> {label} </Link>);
};

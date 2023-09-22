import { RouteObject } from "react-router-dom";
import { INavigationItem } from "./INavigationItem";

export interface INavigationProps {
  children: INavigationItem[];
  router: RouteObject[];
}

import { ReactNode } from "react";
import { INavigation } from "./INavigation";

export type INavigationItem = ReactNode & {
  props: INavigation;
};

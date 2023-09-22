import { ITabProps } from "./ITabProps";

export interface ITabContextProps {
  tabs: ITabProps[];
  addTab: (tab: ITabProps) => void;
  currentTab: string | undefined;
  setCurrentTab: (tab: string) => void;
}

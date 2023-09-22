import { useEffect } from "react";
import { Container } from "src/components";
import { ITabProps } from "../types";
import { useTabs } from "../hooks";

export const Tab = (tab: ITabProps) => {
  const { children, name } = tab;
  const { addTab, currentTab, tabs } = useTabs();

  useEffect(() => {
    addTab(tab);
  }, [tab, tabs, addTab]);

  return currentTab === name ? <Container children={children} /> : null;
};

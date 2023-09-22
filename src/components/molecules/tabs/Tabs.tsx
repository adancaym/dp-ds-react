import { createContext, useState, FC } from "react";
import { Container, Typography } from "src/components";
import { useTheme } from "src/theme";
import { MakeTabsTheme } from "src/theme/components";
import { ITabContextProps, ITabProps, ITabsProps } from "./types";

export const TabContext = createContext<ITabContextProps>({
  tabs: [],
  addTab: (_: ITabProps) => {},
  currentTab: undefined,
  setCurrentTab: (_: string) => {},
});

const { Provider } = TabContext;

export const Tabs: FC<ITabsProps> = ({ children }) => {
  const { theme } = useTheme();
  const { toolbar, tab, tabActive, content } = MakeTabsTheme(theme);

  const [tabs, setTabs] = useState<ITabProps[]>([]);
  const [currentTab, setCurrentTab] = useState<string | undefined>(undefined);

  const addTab = (tab: ITabProps) => {
    if (!tabs.map(({ name }) => name).includes(tab.name)) {
      setTabs([...tabs, tab]);
    }
  };

  const Tabs = () => (
    <Container style={toolbar}>
      {tabs.map(({ label, name }) => (
        <Typography
          key={name}
          onClick={() => setCurrentTab(name)}
          style={currentTab === name ? tabActive : tab}
          children={label}
        />
      ))}
    </Container>
  );

  return (
    <Provider value={{ tabs, addTab, currentTab, setCurrentTab }}>
      <Tabs />
      <Container style={content} children={children} />
    </Provider>
  );
};

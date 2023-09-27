import { createContext, FC, useState } from 'react';
import { Container, Text } from 'src/components';
import { useTheme } from 'src/theme';
import { MakeTabsTheme } from 'src/theme/components';

import { ITabContextProps, ITabProps, ITabsProps } from './types';

export const TabContext = createContext<ITabContextProps>({
  tabs: [],
  addTab: (_: ITabProps) => {},
  currentTab: undefined,
  setCurrentTab: (_: string) => {},
});

const { Provider } = TabContext;

const Tabs: FC<ITabsProps> = ({ children }) => {
  const { theme } = useTheme();
  const { toolbar, tab, tabActive, content } = MakeTabsTheme(theme);

  const [ tabs, setTabs ] = useState<ITabProps[]>([]);
  const [ currentTab, setCurrentTab ] = useState<string | undefined>(undefined);

  const addTab = (tab: ITabProps) => {
    if (!tabs.map(({ name }) => name).includes(tab.name)) setTabs([tab, ...tabs]);
  };

  const TabsLabels = () => (
    <Container style={toolbar}>
      {tabs.map(({ label, name }) => (
        <Container onClick={() => setCurrentTab(name)} key={name} style={currentTab === name ? tabActive : tab} >
          <Text as='label' role='tab-label' data-testid={`tab-${name}`} >
            {label}
          </Text>
        </Container>
      ))}
    </Container>
  );

  return (
    <Provider value={{ tabs, addTab, currentTab, setCurrentTab }}>
      <TabsLabels />
      <Container role='tab-container' style={content} children={children} />
    </Provider>
  );
};

export default Tabs;
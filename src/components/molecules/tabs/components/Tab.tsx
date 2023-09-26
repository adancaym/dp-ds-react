import { useEffect } from 'react';
import { Container } from 'src/components';

import { useTabs } from '../hooks';
import { ITabProps } from '../types';

export const Tab = (tab: ITabProps) => {
  const { children, name } = tab;
  const { addTab, currentTab, tabs } = useTabs();

  useEffect(() => {
    addTab(tab);
  }, [tab, tabs, addTab]);

  const display: () => boolean = () => {
    if(!currentTab) return tabs.findIndex(({ name }) => name === tab.name) === 0;
    return currentTab === name
  }

  return display() ? <Container 
  role="tab-content" 
  className={`tab-content-${tab.name}`} 
  data-testid={`tab-content-${tab.name}`} 
  children={children} 
  /> : null;
};

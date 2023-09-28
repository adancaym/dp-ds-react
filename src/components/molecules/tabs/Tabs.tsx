import { createContext, type FC, useState } from 'react'
import { Container, Text, withThemeContext } from 'src/components'
import { useTheme } from 'src/theme'
import { MakeTabsTheme } from 'src/theme/components'

import { type ITabContextProps, type ITabProps, type ITabsProps } from './types'

export const TabContext = createContext<ITabContextProps>({
  tabs: [],
  addTab: (_: ITabProps) => {},
  currentTab: undefined,
  setCurrentTab: (_: string) => {}
})

const { Provider } = TabContext

interface ITabsLabelsProps {
  tabs: ITabProps[]
  currentTab: string | undefined
  setCurrentTab: (name: string) => void
}

const TabsLabels = (
  { tabs, currentTab, setCurrentTab }: ITabsLabelsProps
) => {
  const { theme } = useTheme()
  const { toolbar, tab, tabActive } = MakeTabsTheme(theme)
  return (

  <Container style={toolbar}>
    {tabs.map(({ label, name }) => (
      <Container onClick={() => { setCurrentTab(name) }} key={name} style={currentTab === name ? tabActive : tab} >
        <Text as='label' role='tab-label' data-testid={`tab-${name}`} >
          {label}
        </Text>
      </Container>
    ))}
  </Container>
  )
}

let Tabs: FC<ITabsProps> = ({ children }) => {
  const { theme } = useTheme()
  const { content } = MakeTabsTheme(theme)

  const [tabs, setTabs] = useState<ITabProps[]>([])
  const [currentTab, setCurrentTab] = useState<string | undefined>(undefined)

  const addTab = (tab: ITabProps) => {
    if (!tabs.map(({ name }) => name).includes(tab.name)) setTabs([tab, ...tabs])
  }
  return (
    <Provider value={{ tabs, addTab, currentTab, setCurrentTab }}>
      <TabsLabels tabs={tabs} currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <Container role='tab-container' style={content} children={children} />
    </Provider>
  )
}

Tabs = withThemeContext({ Component: Tabs })

export default Tabs

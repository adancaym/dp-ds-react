import { createContext, FC, ReactNode, useContext, useState } from 'react';
import { Container, Text, withBrowserRouter, withNavigation } from 'src/components';

export interface SidebarContextProps {
  open: boolean
  setOpen: (_:boolean)=> void
}

export const SidebarContext = createContext<SidebarContextProps>({
  open: false,
  setOpen: (_:boolean)=>{}
})

export const useSidebarContext = () => useContext(SidebarContext)

export const { Provider} = SidebarContext

export interface SidebarProps {
  children: ReactNode[]
}

export const Sidebar = ({children}: SidebarProps) => {
  const [open,setOpen] = useState<boolean>(false)

  return <Provider value={ { open, setOpen } }>
    {children}
  </Provider>

}

let Component: FC = () => (
  <>
    <Container>
      <Text>Github</Text>
    </Container>
  </>
);


Component =withBrowserRouter({
  Component,
})

Component = withNavigation({
  Component,
  routes: [
    {
      path: "/",  
      label: "Home",
      position: "left",
    },
    {
      path: "/",
      label: "Home2",
      position: "left",
    },
    {
      path: "/",
      label: "Home2",
      position: "left",
    },
    {
      path: "/",
      label: "Home2",
      position: "left",
    },
    {
      path: "/about",
      label: "About",
      position: "center",
    },
    {
      path: "/contact",
      label: "Contact",
      position: "right",
    },
  ],
});


export default Component;
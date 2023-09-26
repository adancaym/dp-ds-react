import { Meta, Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { INavigationProps, Navigation, NavigationItem } from 'src/components';

export default {
  component: Navigation,
  tags: ['autodocs'],
} as Meta;


const Template: Story<INavigationProps> = (args) => (
    <BrowserRouter>
        <Navigation {...args} />
    </BrowserRouter>
) ;

export const Default = Template.bind({});
Default.args = {
  children: [
    <NavigationItem position='left' key="home" path="/" label="Home" />,
    <NavigationItem position='center' key="about" path="/about" label="About" />,
    <NavigationItem position='right' key="contact" path="/contact" label="Contact" />,
  ],
  router: [
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/contact', element: <Contact /> },
  ],
};

function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;
}

function Contact() {
  return <h1>Contact</h1>;
}
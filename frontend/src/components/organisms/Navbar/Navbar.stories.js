import React from 'react';
import StoryRouter from 'storybook-react-router';
import NavbarComponent from './Navbar';

export default {
  title: 'Components/organisms',
  component: NavbarComponent,
  decorators: [StoryRouter()],
};

export const Navbar = () => <NavbarComponent />;

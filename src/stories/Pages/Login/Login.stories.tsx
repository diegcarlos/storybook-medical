import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Login as LoginComponent } from './Login';

const meta = {
  title: 'Pages/Login',
  component: LoginComponent,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
} satisfies Meta<typeof LoginComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Login: Story = {
  render: () => <LoginComponent className="flex h-[90vh] w-[90vw]" />,
};

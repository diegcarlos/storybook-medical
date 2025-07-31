import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Switch as SwitchComponent } from './Switch';

const meta = {
  title: 'Components/Switch',
  component: SwitchComponent,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
} satisfies Meta<typeof SwitchComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Switch: Story = {
  args: {
    checked: false,
  },
};

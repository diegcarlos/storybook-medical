import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Button as ButtonComponent } from './Button';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: ButtonComponent,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
} satisfies Meta<typeof ButtonComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Button: Story = {
  args: {
    label: 'Button',
    primary: true,
    size: 'large',
    disabled: false,
  },
};

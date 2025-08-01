import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Divider as DividerComponent } from './';

const meta = {
  title: 'Components/Divider',
  component: DividerComponent,
  argTypes: {
    className: {
      control: 'text',
    },
  },
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
} satisfies Meta<typeof DividerComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Divider: Story = {
  args: {
    label: 'Ou',
    className: 'w-[300px]',
  },
};

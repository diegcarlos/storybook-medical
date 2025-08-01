import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { CardLogin as CardLoginComponent } from '@/components/CardLogin';

const meta = {
  title: 'Components/CardLogin',
  component: CardLoginComponent,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
} satisfies Meta<typeof CardLoginComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardLogin: Story = {
  render: () => <CardLoginComponent className="h-[646px] w-[467px]" />,
};

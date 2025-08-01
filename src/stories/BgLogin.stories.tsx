import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { BgLogin as BgLoginComponent } from '@/components/BgLogin';

const meta = {
  title: 'Components/BgLogin',
  component: BgLoginComponent,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
} satisfies Meta<typeof BgLoginComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BgLogin: Story = {
  render: () => <BgLoginComponent className="h-[800px] w-[1024px]" />,
};

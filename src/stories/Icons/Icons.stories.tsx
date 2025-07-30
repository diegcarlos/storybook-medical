import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Icons as IconsComponent } from './Icons';

const meta = {
  title: 'Components/Icons',
  component: IconsComponent,
  tags: ['autodocs'],
} satisfies Meta<typeof IconsComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Icons: Story = {
  args: {},
};

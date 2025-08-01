import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { IconsFill } from '@/components/icons';
import { allIcons } from '@/components/icons/fill';
import IconsShow from './components/IconsShow';

const meta = {
  title: 'Icons/Fill',
  component: IconsFill,
} satisfies Meta<typeof IconsFill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllIcons: Story = {
  render: () => <IconsShow allIcons={allIcons} type="fill" />,
  args: {
    icon: 'AlertCircle',
  },
};

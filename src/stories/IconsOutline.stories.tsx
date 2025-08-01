import { IconsOutline } from '@/components/icons';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { allIcons } from '@/components/icons/outline';
import IconsShow from './components/IconsShow';

const meta = {
  title: 'Icons/Outline',
  component: IconsOutline,
} satisfies Meta<typeof IconsOutline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllIcons: Story = {
  render: () => <IconsShow allIcons={allIcons} type="outline" />,
  args: {
    icon: 'EmailOutline',
  },
};

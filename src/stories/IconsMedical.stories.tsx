import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Medical, { allIcons } from '@/components/icons/medical';
import IconsShow from './components/IconsShow';

const meta = {
  title: 'Icons/Medical',
  component: Medical,
} satisfies Meta<typeof Medical>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllIcons: Story = {
  render: () => <IconsShow allIcons={allIcons} type="medical" />,
  args: {
    icon: 'Thermometer',
  },
};

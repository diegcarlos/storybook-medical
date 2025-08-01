import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Segmented as SegmentedComponent } from '@/components/Segmented';

const meta = {
  title: 'Components/Segmented',
  component: SegmentedComponent,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
} satisfies Meta<typeof SegmentedComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Segmented: Story = {
  args: {
    className: 'w-[400px]',
    defaultSelected: '1',

    options: [
      {
        id: '1',
        label: 'Login',
      },
      {
        id: '2',
        label: 'Registrar-se',
      },
    ],
  },
};

import Plus from '@/components/icons/fill/Plus';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Button as ButtonComponent } from './Button';

const meta = {
  title: 'Components/Button',
  component: ButtonComponent,
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
    },
    beforeIcon: {
      control: {
        type: 'boolean',
      },
    },
    afterIcon: {
      control: {
        type: 'boolean',
      },
    },
  },
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
    beforeIcon: <Plus />,
    afterIcon: <Plus />,
  },
};

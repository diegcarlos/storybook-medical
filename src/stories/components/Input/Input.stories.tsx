import { EmailOutline } from '@/components/icons/outline';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Input as InputComponent } from './Input';

const meta = {
  title: 'Components/Input',
  component: InputComponent,
  argTypes: {
    beforeIcon: {
      control: {
        type: 'boolean',
      },
    },
  },
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
} satisfies Meta<typeof InputComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Input: Story = {
  args: {
    label: 'Label',
    helperText: 'Helper text',
    sizes: 'large',
    placeholder: 'Placeholder',
    disabled: false,
    showClear: false,
    error: false,
    beforeIcon: <EmailOutline width={16} height={16} />,
    onClear: () => {},
  },
};

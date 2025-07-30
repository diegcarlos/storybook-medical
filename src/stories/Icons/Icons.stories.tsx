import type { Meta, StoryObj } from '@storybook/react';
import { Icons as IconsComponent } from './Icons';

const meta: Meta<typeof IconsComponent> = {
  title: 'Components/Icon',
  component: IconsComponent,
};

export default meta;

type Story = StoryObj<typeof IconsComponent>;

export const Default: Story = {
  args: {},
};

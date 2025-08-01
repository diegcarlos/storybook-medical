import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Button } from '@/components/Button';
import { Outline } from '@/components/icons';
import { Modal as ModalComponent } from '@/components/Modal';

const meta = {
  title: 'Components/Modal',
  component: ModalComponent,
  argTypes: {
    title: {
      control: 'text',
    },
    overlayClassName: {
      control: 'text',
    },
    headerClassName: {
      control: 'text',
    },
    contentClassName: {
      control: 'text',
    },
    dialogClassName: {
      control: 'text',
    },
    footer: {
      control: 'boolean',
    },
    description: {
      control: 'text',
    },
    footerClassName: {
      control: 'boolean',
    },
    icon: {
      control: 'boolean',
    },
  },
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
} satisfies Meta<typeof ModalComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Modal: Story = {
  args: {
    title: 'Esqueceu sua senha?',
    description: 'Digite seu e-mail para redefinir sua senha',
    overlayClassName: '',
    headerClassName: '',
    contentClassName: '',
    dialogClassName: '',
    footerClassName: '',
    icon: <Outline icon="LockOutline" />,
    children: 'a',
    isOpen: true,
    footer: (
      <div className="flex gap-4">
        <Button primary={false}>Voltar</Button>
        <Button>Enviar</Button>
      </div>
    ),
  },
};

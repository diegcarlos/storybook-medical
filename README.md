# care-monitor-components

Uma biblioteca de componentes React para aplicações médicas, construída com TypeScript, Tailwind CSS e Storybook.

## Instalação

```bash
npm install care-monitor-components
```

## Uso

```tsx
import React from 'react';
import { Button, Input, Login } from 'care-monitor-components';

function App() {
  return (
    <div>
      <Button>Clique aqui</Button>
      <Input label="Nome" placeholder="Digite seu nome" />
      <Login />
    </div>
  );
}
```

## Componentes Disponíveis

### Componentes de UI

- `Button` - Botão com diferentes tamanhos e estilos
- `Divider` - Divisor com label opcional
- `Input` - Campo de entrada com ícones e validação
- `Modal` - Modal com header, content e footer
- `Segmented` - Controle de segmentação
- `Switch` - Switch toggle

### Componentes de Layout

- `BgLogin` - Background para páginas de login
- `CardLogin` - Card para formulários de login

### Páginas

- `Login` - Página completa de login com formulário

### Ícones

A biblioteca inclui uma coleção completa de ícones organizados em categorias:

#### Outline Icons

```tsx
import {
  ChevronRightOutline,
  EmailOutline,
  LockOutline,
} from 'care-monitor-components';
```

#### Fill Icons

```tsx
import { Activity, AlertCircle, Checkmark } from 'care-monitor-components';
```

#### Medical Icons

```tsx
import { BloodPressure, Heart, Stethoscope } from 'care-monitor-components';
```

## Tecnologias

- React 19
- TypeScript
- Tailwind CSS
- Storybook
- tsup (build tool)
- React Hook Form
- Zod (validação)

## Licença

MIT

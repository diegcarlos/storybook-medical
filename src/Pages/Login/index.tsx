import { BgLogin } from '@/components/BgLogin';
import { Button } from '@/components/Button';
import { CardLogin } from '@/components/CardLogin';
import { Divider } from '@/components/Divider';
import { IconsOutline } from '@/components/icons';
import { Input } from '@/components/Input';
import { Modal } from '@/components/Modal';
import { Segmented } from '@/components/Segmented';
import { Switch } from '@/components/Switch';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { tv } from 'tailwind-variants';
import { z } from 'zod';

export interface LoginProps {
  className?: string;
  onSubmit?: (data: LoginFormData) => void;
  logoUrl?: string;
  imageUrl?: string;
  linkInstagram?: string;
  linkFacebook?: string;
  linkSupport?: string;
}

const containerTv = tv({
  base: 'h-screen w-full',
});

// Definindo o schema de validação com zod
const loginSchema = z.object({
  email: z.email('E-mail inválido'),
  password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
  remember: z.boolean().optional(),
});

type LoginFormData = z.infer<typeof loginSchema>;

export const Login = (props: LoginProps) => {
  const {
    className,
    onSubmit,
    logoUrl,
    imageUrl,
    linkInstagram,
    linkFacebook,
    linkSupport,
  } = props;

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      remember: false,
    },
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={containerTv({ className })}>
      <BgLogin className="flex h-full w-full flex-col items-center justify-between">
        <div className="z-20 flex h-full w-full">
          <div className="relative z-20 hidden h-full w-full items-center justify-center lg:flex">
            {logoUrl && (
              <Image
                width={216}
                height={216}
                src={logoUrl}
                className="absolute top-8 left-4 max-w-[13.5rem]"
                alt="Logo"
              />
            )}
            {imageUrl && (
              <Image
                width={628.5}
                height={628.5}
                src={imageUrl}
                className="w-full max-w-[41.9rem]"
                alt="Background"
              />
            )}
          </div>
          <CardLogin className="z-20 mt-12 mr-12 flex max-h-[646px] max-w-[467px] flex-col gap-6 px-12">
            <Segmented
              className="w-[300px]"
              defaultSelected="login"
              options={[
                { id: 'login', label: 'Login' },
                { id: 'register', label: 'Registrar-se' },
              ]}
            />
            <div>
              <h1 className="title-large">Login</h1>
              <span className="body-medium-medium text-text-400">
                Por favor, faça o login digitando as informações abaixo para
                poder continuar.
              </span>
            </div>
            <form
              onSubmit={handleSubmit((data) => onSubmit?.(data))}
              className="flex flex-col gap-4"
            >
              <Input
                label="E-mail"
                beforeIcon={<IconsOutline icon="EmailOutline" />}
                placeholder="Digite seu e-mail"
                {...register('email')}
                error={!!errors.email?.message}
                helperText={errors.email?.message}
              />
              <Input
                label="Senha"
                beforeIcon={<IconsOutline icon="LockOutline" />}
                placeholder="Digite sua senha"
                type="password"
                {...register('password')}
                error={!!errors.password?.message}
                helperText={errors.password?.message}
              />
              <div className="flex w-full flex-row items-center justify-between gap-2">
                <label className="flex cursor-pointer items-center gap-2">
                  <Switch
                    sizes="sm"
                    checked={!!watch('remember')}
                    onChange={() => {
                      setValue('remember', !watch('remember'));
                    }}
                  />
                  <span className="label-medium">Remember me</span>
                </label>
                <button
                  type="button"
                  className="body-medium-medium text-primary-1 cursor-pointer"
                  onClick={() => setIsModalOpen(true)}
                >
                  Esqueceu a Senha?
                </button>
              </div>
              <Button type="submit">Acessar</Button>

              <Divider label="Ou" className="mt-2" />

              <Button
                primary={false}
                className="flex flex-row items-center gap-2 text-[#9F9F9F]"
                type="button"
              >
                <IconsOutline icon="Google" />
                Continuar com Google
              </Button>
            </form>
          </CardLogin>
        </div>
        {/* Footer */}
        <div className="z-20 hidden h-22 w-full items-end justify-between px-12 lg:flex">
          <div className="flex w-full items-end gap-2">
            <div className="w-[305px]">
              <h2 className="text-[1.4rem] font-bold text-[#414141]">
                Precisa de suporte?
              </h2>
              <span className="text-xs font-semibold text-[#9E9E9E]">
                👋 Precisa de ajuda? Nossa equipe está pronta para te atender.
              </span>
            </div>
            <a
              href={linkSupport}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-7.5 cursor-pointer items-center justify-center rounded-[7px] bg-[#C4C4C44D] pl-2 text-sm font-bold hover:bg-[#C4C4C44D]/80"
            >
              <span>Falar conosco</span>
              <span className="text-primary-1">
                <IconsOutline icon="ChevronRightOutline" />
              </span>
            </a>
          </div>
          <div className="flex h-full w-full items-center justify-between gap-2">
            <div className="title-medium flex items-center gap-2">
              <a
                hidden={!linkInstagram}
                href={linkInstagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <span hidden={!linkInstagram && !linkFacebook} className="">
                -
              </span>
              <a
                hidden={!linkFacebook}
                href={linkFacebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </div>
            <div className="title-medium">
              <span>Site: </span>
              <a
                className="text-primary-1"
                href="https://www.gestione.com.br"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.gestione.com.br
              </a>
            </div>
          </div>
        </div>
      </BgLogin>
      <Modal
        isOpen={isModalOpen}
        title="Esqueceu a Senha?"
        description="Digite seu e-mail para redefinir sua senha"
        icon={<IconsOutline icon="LockOutline" />}
        footer={
          <div className="flex gap-4">
            <Button primary={false} onClick={() => setIsModalOpen(false)}>
              Voltar
            </Button>
            <Button>Enviar</Button>
          </div>
        }
      >
        <div>
          <Input
            sizes="large"
            label="Email"
            placeholder="Digite seu e-mail"
            beforeIcon={<IconsOutline icon="EmailOutline" />}
          />
        </div>
      </Modal>
    </div>
  );
};

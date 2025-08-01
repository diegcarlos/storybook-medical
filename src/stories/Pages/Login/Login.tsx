import {
  ChevronRightOutline,
  EmailOutline,
  Google,
  LockOutline,
} from '@/components/icons/outline';
import { BgLogin } from '@/stories/components/BgLogin/BgLogin';
import { Button } from '@/stories/components/Button/Button';
import { CardLogin } from '@/stories/components/CardLogin/CardLogin';
import { Divider } from '@/stories/components/Divider/Divider';
import { Input } from '@/stories/components/Input/Input';
import { Segmented } from '@/stories/components/Segmented/Segmented';
import { Switch } from '@/stories/components/Switch/Switch';
import { zodResolver } from '@hookform/resolvers/zod';
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
}

const containerTv = tv({
  base: 'h-full w-full',
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

  return (
    <div className={containerTv({ className })}>
      <BgLogin className="flex h-full w-full flex-col items-center justify-between">
        <div className="z-20 flex h-full w-full">
          <div className="relative z-20 flex h-full w-full items-center justify-center">
            {logoUrl && (
              <img
                src={logoUrl}
                className="absolute top-8 left-4 max-w-[13.5rem]"
                alt="Logo"
              />
            )}
            {imageUrl && (
              <img
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
                beforeIcon={<EmailOutline />}
                placeholder="Digite seu e-mail"
                {...register('email')}
                error={!!errors.email?.message}
                helperText={errors.email?.message}
              />
              <Input
                label="Senha"
                beforeIcon={<LockOutline />}
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
                <a
                  href="#"
                  className="body-medium-medium text-primary-1 cursor-pointer"
                >
                  Esqueceu a Senha?
                </a>
              </div>
              <Button type="submit">Acessar</Button>

              <Divider label="Ou" className="mt-2" />

              <Button
                primary={false}
                className="flex flex-row items-center gap-2 text-[#9F9F9F]"
                type="button"
              >
                <Google />
                Continuar com Google
              </Button>
            </form>
          </CardLogin>
        </div>
        {/* Footer */}
        <div className="z-20 flex h-22 w-full items-end justify-between px-12">
          <div className="flex w-full items-end gap-2">
            <div className="w-[305px]">
              <h2 className="text-[1.4rem] font-bold text-[#414141]">
                Precisa de suporte?
              </h2>
              <span className="text-xs font-semibold text-[#9E9E9E]">
                👋 Precisa de ajuda? Nossa equipe está pronta para te atender.
              </span>
            </div>
            <a className="flex h-7.5 cursor-pointer items-center justify-center rounded-[7px] bg-[#C4C4C44D] pl-2 text-sm font-bold hover:bg-[#C4C4C44D]/80">
              <span>Falar conosco</span>
              <span className="text-primary-1">
                <ChevronRightOutline />
              </span>
            </a>
          </div>
          <div className="flex h-full w-full items-center gap-2">
            <div className="title-medium flex items-center gap-2">
              <a hidden={!linkInstagram} href={linkInstagram}>
                Instagram
              </a>
              <span hidden={!linkInstagram && !linkFacebook} className="">
                -
              </span>
              <a hidden={!linkFacebook} href={linkFacebook}>
                Facebook
              </a>
            </div>
          </div>
        </div>
      </BgLogin>
    </div>
  );
};

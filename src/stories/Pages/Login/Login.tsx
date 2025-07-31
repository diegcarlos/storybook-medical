import { BgLogin } from '@/stories/components/BgLogin/BgLogin';
import { CardLogin } from '@/stories/components/CardLogin/CardLogin';
import { tv } from 'tailwind-variants';

export interface LoginProps {
  className?: string;
}

const containerTv = tv({
  base: 'h-full w-full',
});

export const Login = (props: LoginProps) => {
  const { className } = props;

  return (
    <div className={containerTv({ className })}>
      <BgLogin className="flex h-full w-full flex-row items-center justify-between">
        <div className="w-96 items-center justify-center"></div>
        <CardLogin className="max-h-[646px] max-w-[467px]"></CardLogin>
      </BgLogin>
    </div>
  );
};

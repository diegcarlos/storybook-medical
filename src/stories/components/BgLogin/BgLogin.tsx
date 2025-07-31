import Bg from '@/assets/png/Fundo.png';
import { tv } from 'tailwind-variants';

export interface BgLoginProps {
  children?: React.ReactNode;
  className?: string;
}

const containerTv = tv({
  base: 'relative flex h-full w-full items-center justify-center overflow-hidden bg-[#F0F0F0] p-6',
});

export const BgLogin = (props: BgLoginProps) => {
  const { children, className } = props;

  return (
    <div
      className={containerTv({ className })}
      style={{ position: 'relative' }}
    >
      {children}
      <div
        className="absolute inset-0 top-6 right-6 bottom-6 left-6 z-0 bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${Bg.src})`,
          backgroundSize: '100% 100%',
        }}
      ></div>
    </div>
  );
};

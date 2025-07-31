import { tv } from 'tailwind-variants';

export interface CardLoginProps {
  children?: React.ReactNode;
  className?: string;
}

const containerTv = tv({
  base: 'h-full w-full rounded-[25px] bg-white p-8 shadow-[0px_50px_130px_0px_#0000001A]',
});

export const CardLogin = (props: CardLoginProps) => {
  const { children, className } = props;

  return <div className={containerTv({ className })}>{children}</div>;
};

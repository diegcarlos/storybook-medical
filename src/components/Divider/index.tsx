import { tv } from 'tailwind-variants';

interface DividerProps {
  className?: string;
  label?: string;
}

const containerTv = tv({
  base: 'flex w-full flex-row items-center justify-center gap-2 text-sm text-[#A8A8A8]',
});

export const Divider = (props: DividerProps) => {
  const { className, label } = props;

  return (
    <div className={containerTv({ className })}>
      <div className="h-px w-full border-1 border-t border-[#A8A8A8]/50"></div>
      <span className="label-medium">{label}</span>
      <div className="h-px w-full border-1 border-t border-[#A8A8A8]/50"></div>
    </div>
  );
};

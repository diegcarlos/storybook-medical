import IconPerson from '../../assets/svg/fill/archive.svg?react';

export interface IconsProps {}

export const Icons = (props: IconsProps) => {
  const {} = props;

  return (
    <div className="flex items-center gap-4">
      <IconPerson />
    </div>
  );
};

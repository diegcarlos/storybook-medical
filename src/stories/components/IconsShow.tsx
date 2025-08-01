import { IconsFill, IconsMedical, IconsOutline } from '@/components/icons';
import { useEffect, useState } from 'react';
import Modal from './Modal';

interface IconsShowProps {
  allIcons: string[];
  type: 'outline' | 'fill' | 'medical';
}

const IconName = ({
  iconName,
  type,
}: {
  iconName: string;
  type: 'outline' | 'fill' | 'medical';
}) => {
  switch (type) {
    case 'outline':
      return <IconsOutline icon={iconName as any} width={24} height={24} />;
    case 'fill':
      return <IconsFill icon={iconName as any} width={24} height={24} />;
    case 'medical':
      return <IconsMedical icon={iconName as any} width={24} height={24} />;
  }
};

const IconsShow = ({ allIcons, type }: IconsShowProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredIcons, setFilteredIcons] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredIcons(allIcons);
    } else {
      const filtered = allIcons.filter((iconName) =>
        iconName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredIcons(filtered);
    }
  }, [allIcons, searchTerm]);

  return (
    <>
      <div className="p-5">
        {/* Campo de busca */}
        <div className="mb-5">
          <input
            type="text"
            placeholder="Buscar ícones..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-[400px] rounded-lg border-2 border-gray-200 px-4 py-3 text-base transition-colors duration-200 outline-none focus:border-blue-600"
          />
          <div className="mt-2 text-sm text-gray-500">
            {filteredIcons.length} de {allIcons.length} ícones encontrados
          </div>
        </div>

        {/* Grid de ícones */}
        <div className="grid [grid-template-columns:repeat(auto-fill,minmax(120px,1fr))] gap-4 rounded-lg bg-gray-100 p-5">
          {filteredIcons.map((iconName) => (
            <div
              key={iconName}
              className="flex min-h-[80px] cursor-pointer flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-3 transition-shadow transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md"
              onClick={() => {
                setSelectedIcon(iconName);
                setOpen(true);
              }}
            >
              <IconName iconName={iconName} type={type} />
              <span className="mt-2 text-center text-[10px] break-words text-gray-500">
                {iconName}
              </span>
            </div>
          ))}
        </div>

        {/* Mensagem quando nenhum ícone é encontrado */}
        {filteredIcons.length === 0 && (
          <div className="py-10 text-center text-base text-gray-500">
            Nenhum ícone encontrado para "{searchTerm}"
          </div>
        )}
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        {/*  MODO DE USO DO ICONE */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-2xl font-bold">
            <div className="rounded-full bg-amber-100 p-2">
              <IconName iconName={selectedIcon as any} type={type} />
            </div>
            {selectedIcon}
          </div>
          <small className="text-gray-400">
            Para usar o ícone, você precisa adicionar o seguinte código ao seu
            projeto:
          </small>
          <code className="rounded-lg bg-gray-100 p-2">
            <code>
              {type === 'outline' && `<IconsOutline icon="${selectedIcon}" />`}
            </code>
            <code>
              {type === 'fill' && `<IconsFill icon="${selectedIcon}" />`}
            </code>
            <code>
              {type === 'medical' && `<IconsMedical icon="${selectedIcon}" />`}
            </code>
          </code>
        </div>
      </Modal>
    </>
  );
};

export default IconsShow;

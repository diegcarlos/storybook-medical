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

const CodeFormat = ({ type, iconName }: { type: string; iconName: string }) => {
  return (
    <span>
      <span className="text-[#569CD6">{'<'}</span>
      <span className="text-[#4EC9B0]">IconsOutline</span>
      <span> </span>
      <span className="text-[#9CDCFE]">icon</span>
      <span className="text-white">=</span>
      <span className="text-[#CE9178]">{`"${iconName}"`}</span>
      <span className="text-[#569CD6]">{' />'}</span>
    </span>
  );
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
          <pre className="relative overflow-x-auto rounded-lg border border-[#232323] bg-[#1e1e1e] p-4 font-mono text-sm text-gray-100 shadow-inner">
            <div className="absolute top-2 left-3 flex gap-1">
              <span className="inline-block h-3 w-3 rounded-full bg-[#ff5f56]" />
              <span className="inline-block h-3 w-3 rounded-full bg-[#ffbd2e]" />
              <span className="inline-block h-3 w-3 rounded-full bg-[#27c93f]" />
            </div>
            <code className="block pt-6 pl-0 whitespace-pre">
              {type === 'outline' && (
                <CodeFormat type={type} iconName={selectedIcon as any} />
              )}
              {type === 'fill' && (
                <CodeFormat type={type} iconName={selectedIcon as any} />
              )}
              {type === 'medical' && (
                <CodeFormat type={type} iconName={selectedIcon as any} />
              )}
            </code>
          </pre>
        </div>
      </Modal>
    </>
  );
};

export default IconsShow;

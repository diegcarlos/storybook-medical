// Exemplo de uso dos componentes em outro projeto
import { Button } from '@seu-org/storybook-components';
import React from 'react';

function App() {
  return (
    <div className="app">
      <h1>Meu App usando o Sistema de Design</h1>

      <section>
        <h2>Botões</h2>
        <div className="button-group">
          <Button label="Botão Primário" primary={true} size="large" />

          <Button label="Botão Secundário" primary={false} size="medium" />

          <Button label="Botão Pequeno" size="small" disabled={true} />
        </div>
      </section>

      <section>
        <h2>Com Ícones</h2>
        <div className="button-group">
          <Button label="Salvar" beforeIcon={<span>💾</span>} primary={true} />

          <Button
            label="Download"
            afterIcon={<span>⬇️</span>}
            primary={false}
          />
        </div>
      </section>
    </div>
  );
}

export default App;


import Titulo from './components/Titulo'
import Menu from './components/Menu'
import Saudacao from './components/Saudacao'
import Contador from './components/Contador'

import './App.css'

function App() {

  const opcoes = ['Arquivo', 'Salvar', 'Editar', 'Fechar', 'Ajuda' ]

  return (
    <div>
      <Titulo />
      <div className="principal">
        <Menu opcoes={ opcoes } />
        <div>
          <Saudacao 
            nome="Paulo Silva"
            idade={50}
            pronome="Sr." />
          <Contador />
        </div>
      </div>
    </div>
  );
}

export default App;

import './App.css';
import Logo from './componentes/Logo';
import iconPerfil from './imagens/perfil.svg';
import iconSacola from './imagens/sacola.svg';

const textOpcoes = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS'];
const icons =  [iconPerfil, iconSacola];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo></Logo>
        <ul className='opcoes'>
          {textOpcoes.map((opcao) => (
            <li key={opcao} className="opcao">{opcao}</li>
          ))}
        </ul>
        <ul className='icones'>
          {icons.map((icon) => (
            <li key={icon} className="icone">
              <img src={icon} alt='icone'></img>
            </li>
          ))}
        </ul>
      </header>
     
    </div>
  );
}

export default App;

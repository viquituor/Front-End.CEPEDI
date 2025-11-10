import iconPerfil from '../../imagens/perfil.svg';
import iconSacola from '../../imagens/sacola.svg';
import './estilo.css';
const textOpcoes = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS'];
const icons =  [iconPerfil, iconSacola];

function Navegacao() {
    return (
        <div className='navegacao'>
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
        </div>
    )}

    export default Navegacao;
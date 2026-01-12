import iconPerfil from '../../imagens/perfil.svg';
import iconSacola from '../../imagens/sacola.svg';
import './estilo.css';
const icons =  [iconPerfil, iconSacola];

function icones() {
    return (
    
        <ul className='icones'>
          {icons.map((icon) => (
            <li key={icon} className="icone">
              <img src={icon} alt='icone'></img>
            </li>
          ))}
        </ul>

    )}

    export default icones;
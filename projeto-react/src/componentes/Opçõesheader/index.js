import './estilo.css';
const textOpcoes = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS'];

function OpcoesHeader() {
    return(
            <ul className='opcoes'>
          {textOpcoes.map((opcao) => (
            <li key={opcao} className="opcao">{opcao}</li>
          ))}
        </ul>
        
    )
}

export default OpcoesHeader;
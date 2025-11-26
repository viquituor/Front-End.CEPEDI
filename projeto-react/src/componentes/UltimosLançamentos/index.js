import './estilo.css'
import Titulo from '../Titulo'
import CardRecomenda from '../CardRecomenda'
import UltimosLancamentosContainer from '../UltimosLancamentosContainer'
import NovosLivrosContainer from '../NovosLivrosContainer'
import {livros} from './dadosUltimoslancamentos'


function UltimosLancamentos(){
    return(
        <UltimosLancamentosContainer>
            <Titulo >Últimos Lançamentos</Titulo>
            <NovosLivrosContainer>
            {livros.map(livro => (
                    <img src={livro.src} alt={livro.nome}></img>
            ))}
            </NovosLivrosContainer>
        </UltimosLancamentosContainer>
    )
}
export default UltimosLancamentos;
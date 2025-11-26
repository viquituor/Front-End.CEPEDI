import './estilo.css'
import Titulo from '../Titulo'
import Subtitulo from '../Subtitulo'
import Resultado from '../Resultado'
import { useState } from 'react'
import { livros } from './dadosPesquisa'


function PesquisarContainer(){

    const [livroPesquisado, setLivroPesquisado] = useState([]);

    return(
        <section className='PesquisaContainer'>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu produto</Subtitulo>
            <input placeholder="DiGITE AQUI"
            onBlur={evento =>{const textoDigitado = evento.target.value;
                              const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado));
                              setLivroPesquisado(resultadoPesquisa)

            }}/>
            {livroPesquisado.map(livro => (
               <Resultado>
                <p>{livro.nome}</p>
                <img src={livro.src} alt='livro'></img>
               </Resultado> 
            ))}
           </section>
           
    )
}

export default PesquisarContainer
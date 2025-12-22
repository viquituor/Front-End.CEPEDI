import { useEffect, useState } from 'react';
import './Home.css';
import { getFavoritos } from '../Serviços/favoritos';
import Titulo from '../componentes/Titulo';
import Resultado from '../componentes/Resultado';
import ResultadoContainer from '../componentes/ResultadoContainer';
import AppContainer from '../componentes/AppContainer';
import livroImg from '../imagens/livro.png';
import { deleteFavoritos } from '../Serviços/favoritos';

function Favoritos() {
  const [favoritos, setFavoritos] = useState([])

  async function fetchFavoritos() {
    const favoritosDaApi = await getFavoritos()
    setFavoritos(favoritosDaApi)
    
  }

  async function deletarFavorito(id) {
    await deleteFavoritos(id)
    await fetchFavoritos()
    alert(`Livro de id:${id} deletado!`)

    
  }

  useEffect(() => {
    fetchFavoritos()
  }, [])
  return (
    <AppContainer>
    <div>
      <Titulo>Aqui está seus livros favoritos:</Titulo>
      <ResultadoContainer>
     {
     favoritos.length !== 0 ? favoritos.map ( favorito => (
      <Resultado onClick={() => deletarFavorito(favorito.id)}>
      <p>{favorito.nome}</p>
      <img src={livroImg} alt='imagem do livro'/>
      </Resultado>
     )): null
    }
     </ResultadoContainer>
   </div>
   </AppContainer>
  );
}

export default Favoritos;
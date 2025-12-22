import './Home.css';
import CardRecomenda from '../componentes/CardRecomenda';
import Pesquisa from '../componentes/PesquisaContainer';
import UltimosLancamentos from '../componentes/UltimosLancamentos';
import livroRecomendado from '../imagens/livro4.png';

function Home() {
  return (
    <div className='App'>

   <Pesquisa></Pesquisa>
   <UltimosLancamentos></UltimosLancamentos>
   <CardRecomenda 
       titulo="Talvez você se interesse por..."
        subtiulo="Angular 11"
        descrição="Construindo uma aplicação com a plataforma Google"
        img={livroRecomendado}>
   </CardRecomenda>

   </div>
  );
}

export default Home;
import './App.css';
import Header from './componentes/Header';
import Pesquisa from './componentes/PesquisaContainer'
import UltimosLancamentos from './componentes/UltimosLançamentos';
import CardRecomenda from './componentes/CardRecomenda';
import livroRecomendado from './imagens/livro4.png'




function App() {
  return (
    <div className="App">
      <Header></Header>
      <Pesquisa></Pesquisa>
      <UltimosLancamentos></UltimosLancamentos>
      <CardRecomenda 
        titulo="Talvez voce se interesse por..."
        subtiulo="Angular 11"
        descrição="Construindo uma aplicação com a plataforma Google"
        img={livroRecomendado}
      ></CardRecomenda>

    </div>
  );
}

export default App;

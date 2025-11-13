import Logo from '../Logo';
import Icones from '../icones';
import OpcoesHeader from '../Opçõesheader';
import './estilo.css'

function header(){
    return(
    <header className="App-header">
        <Logo></Logo>
        <OpcoesHeader></OpcoesHeader>
        <Icones></Icones>

      </header>
    )
}

export default header;
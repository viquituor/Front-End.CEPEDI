import Logo from '../Logo';
import Icones from '../icones';
import OpcoesHeader from '../Opçõesheader';
import { Link } from 'react-router-dom';
import './estilo.css'

function header(){
    return(
    <header className="App-header">
       <Link to="/">
        <Logo></Logo>
        </Link>
        <OpcoesHeader></OpcoesHeader>
        <Icones></Icones>

      </header>
    )
}

export default header;
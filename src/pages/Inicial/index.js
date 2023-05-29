import React from 'react';
import { Link } from 'react-router-dom';
import './stylesInicial.css';

function Inicial() {
    return (
        <>
            <h1>Pagina inicial</h1>
            <section className="tela">
                <div className="cadastrar">
                    <label for="">Cadastrar categoria</label>
                    <input type="text" placeholder="Ex: Atentado em escolas" />
                    <a className="btn-buscar" href="#">buscar</a>
                </div>
                <div className='select'>

                    <h2>Consutar categarias cadastrados</h2>
                    <div className="dropdown">
                        <button className="btn btn-secondary btn-default btn-lg dropdown-toggle" type="button" id="menu1" data-toggle="dropdown">teste
                            <span className="caret"></span></button>
                        <ul className="dropdown-menu" role="menu" aria-labelledby="menu1">
                            <li role="presentation"><a role="menuitem" tabindex="-1" href="#">armas</a></li>
                            <li role="presentation"><a role="menuitem" tabindex="-1" href="#">drogas</a></li>
                            <li role="presentation"><a role="menuitem" tabindex="-1" href="#">assaltos</a></li>
                            <li role="presentation" class="divider"></li>
                            <li role="presentation"><a role="menuitem" tabindex="-1" href="#">About Us</a></li>
                        </ul>                        
                    </div>

                    
                </div>



            </section>
            

        </>
    );
}

export default Inicial;
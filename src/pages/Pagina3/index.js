import React from 'react';

import './styles3.css';

function Pag3() {
    return (

        <div className='tela3'>
            <div className='cadastrar-palavra'>
                <h2>Cadastrar palavra</h2>
                <div className='cadastrar-texto'>
                    <input type="text" placeholder='Digita a palavra' />
                    <select>
                        <option value="" key="">Escolha a categoria</option>
                        <option value="" key="">Escola</option>
                        <option value="" key="">Faculdade</option>
                    </select>
                </div>

                <div className='nivel'>
                <label>Nível de Alerta</label>
                <select>
                    <option value="" key=""></option>
                    <option value="" key="">Baixo</option>
                    <option value="" key="">Médio</option>
                    <option value="" key="">Alto</option>
                </select>
                <button> Cadastrar</button>
                </div>
            </div>


            
        </div>
    );
}

export default Pag3;
import React from 'react';

import './styles2.css';

function Pag2() {
  return (
    <>
    <div className='pagina2'>
      <h2>Consutar categarias cadastradas</h2>
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

      <h2 className='registro'>Registro de Palavras</h2>
      <table class="table table-striped" id="table-id">
        
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Palavras</th>
            <th scope="col"></th>
            <th scope="col" className='row-acao' >Ações</th>
            
          </tr>
        </thead >
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Assalto</td>
            <td></td>
            <td><button type="button" class="btn btn-danger">Excluir</button> <button type="button" class="btn btn-warning">Editar</button></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Homicídio</td>
            <td></td>
            <td><button type="button" class="btn btn-danger">Excluir</button> <button type="button" class="btn btn-warning">Editar</button></td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Roubo</td>
            <td><button type="button" class="btn btn-danger">Excluir</button> <button type="button" class="btn btn-warning">Editar</button></td>
          </tr>
        </tbody>
      </table>
      
      </div>
    </>
  );
}

export default Pag2;
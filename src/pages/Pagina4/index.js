import React from 'react';

import './styles4.css';

function Pag4() {
    return (
        <div className='pag4'>          

             <h2 className='registro'>Textos enviados</h2>
      <table class="table table-striped" id="table-id">
        
        <thead>
          <tr>
            <th scope="col">Data</th>
            <th scope="col">Texto</th>
            <th scope="col">Palavra-chave</th>
            
            
          </tr>
        </thead >
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Assalto</td>
            <td>assaltavam/armados</td>
            
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Homicídio</td>
            <td>Roubavam</td>
            
          </tr>
          <tr>
            <th scope="row">3</th>
            <td >Roubo</td>
            <td> Assalto/armado </td>
            
          </tr>
        </tbody>
      </table>   
            
          
        </div>
    );
}

export default Pag4;
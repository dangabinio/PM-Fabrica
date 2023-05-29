import React from 'react';
import { Link } from 'react-router-dom';
import './styles6.css';

function Pag6() {
    return (
        <div>
            
            <Link to='/'>Inicial</Link>
           <Link to='/pag2'>Pagina2</Link>
           <Link to='/pag3'>Pagina3</Link>
           <Link to='/pag4'>Pagina4</Link>
           <Link to='/pag5'>Pagina5</Link>
        </div>
    );
}

export default Pag6;
import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <section className="user-left">
            <div className="template">
                <img src="images/png.png" alt="foto da pessoa" />
                <p>PMPB</p>

            </div>
            <div className="sistema">
                <img src="images/png.png" alt="foto do usuário" />
                <p>Sistema:</p>
                <span>Usuario</span>
            </div>

            <div className='links'>
           <Link to='/pag0'>Pagina0</Link>    
           <Link to='/'>Inicial</Link>
           <Link to='/pag2'>Pagina2</Link>
           <Link to='/pag3'>Pagina3</Link>  
           <Link to='/pag4'>Pagina4</Link>
           <Link to='/pag5'>Pagina5</Link>
           <Link to='/pag6'>Pagina6</Link>
            </div>
            
        </section>


    );
}

export default Sidebar;
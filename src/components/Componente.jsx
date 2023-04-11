import React from 'react';
/* import { Container } from 'react-bootstrap'; */
import { Link } from 'react-router-dom';


function  Componente() {
    return (
        <>
            <nav className="navbar bg-dark">
                <div className="container">
                    {/* <a className="navbar-brand text-white" href="#">
                        <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Bootstrap" width="30" height="24" />
                    </a> */}
                    <div className='d-flex justify-content-start'>
                        <Link to="/" className="text-white ms-3 text-decoration-none">
                            Home
                        </Link>
                        <Link to="/planes" className="text-white ms-3 text-decoration-none">
                            Planes
                        </Link>
                        <Link to="/RickAndMorty" className="text-white ms-3 text-decoration-none">
                            RickAndMorty
                        </Link>
                    </div>
                </div>
            </nav>
        </>
            
    )
}

export default Componente;

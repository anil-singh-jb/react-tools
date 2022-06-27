import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (

        <>
            <div className='nav-button d-flex flex-direction-row'>
                <Link className="nav-menu" to="/home">Home</Link>
                <Link className="nav-menu" to="/calculator">Calculator</Link>
                <Link className="nav-menu" to="/currencyconvertor">Currency Convertor</Link>
                <Link className="nav-menu" to="/todo">Todos List</Link>
                <Link className="nav-menu" to="/get-api">Get API</Link>
                <Link className="nav-menu" to="/news-home">News</Link>
            </div>
        </>

    )
}

export default Navbar
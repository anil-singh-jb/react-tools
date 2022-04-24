import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (

        <>

            <div classNameName='nav-button d-flex flex-direction-row'>
                <Link classNameName="nav-menu" to="/home">Home</Link>
                <Link classNameName="nav-menu" to="/calculator">Calculator</Link>
                <Link classNameName="nav-menu" to="/currencyconvertor">Currency Convertor</Link>
                <Link classNameName="nav-menu" to="/todo">Todos List</Link>
                <Link classNameName="nav-menu" to="/get-api">Get API</Link>
            </div>

        </>

    )
}

export default Navbar
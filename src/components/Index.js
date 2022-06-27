import React from 'react';
import { Link } from 'react-router-dom';
import './Style.css';


function Index(props) {
    // const { data } = props;
    return (
        <div className="container">
            <div className="index-nav-button d-flex flex-direction-row">
                <Link className="index-nav-menu" to="/calculator">Calculator</Link> <br />
                <Link className="index-nav-menu" to="/currencyconvertor">Currency Convertor</Link>
                <Link className="index-nav-menu" to="/todo">Todos List</Link>
                <Link className="index-nav-menu" to="/get-api">Get API</Link>
                <Link className="index-nav-menu" to="/news-home">News</Link>
            </div>

            {/* <div className='row'>
                <div className='col-12 col-md-4 col-lg-4'>
                    <div className='mai-box-api' >
                        <div className='box-img' >
                            <img src={data.urlToImage} alt="box img" />
                        </div>
                        <div className="box-body">
                            <h5 className="box-title">{data.title}</h5>
                            <p className="box-text">{data.description}</p>
                            <Link className="btn btn-primary" to="#">More</Link>
                        </div>
                    </div>
                </div>

            </div> */}
        </div>
    )
}

export default Index
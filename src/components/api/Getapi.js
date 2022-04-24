import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import axios from 'axios';

function Getapi() {
    const [news, setNews] = useState([]);

    const fetchNews = () => {
        axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=e21dccbfdd9240a99ad60369a131439f')
            .then((response) => {
                // console.log(response.data.articles);
                setNews(response.data.articles);
            })
    }


    useEffect(() => {
        fetchNews()
    }, [])


    return (
        <>
        <Navbar /> <br />
            <div className='container'>
                

                <div className='row'>
                    {
                        news.map((value, i) => {
                            return (
                                <div className='col-12 col-md-4 col-lg-4' key={i}>
                                    <div className='mai-box-api' >
                                        <div className='box-img' >
                                            <img src={value.urlToImage} alt="box img" />
                                        </div>
                                        <div className="box-body">
                                            <h5 className="box-title">{value.title}</h5>
                                            <p className="box-text">{value.description}</p>
                                            <Link className="btn btn-primary" to="">More</Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Getapi
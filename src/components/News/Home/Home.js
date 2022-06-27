import React, { useEffect } from 'react';
import NewsListing from '../NewsListing/NewsListing';
import Navbar from '../../Navbar';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addNews } from '../../../redux/reducers/News/NewsSlice';

function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchNews = async () => {
            const response = await
            axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=e21dccbfdd9240a99ad60369a131439f')
            .catch((err) => {
                console.log("Err :", err);
            });
            dispatch(addNews(response.data.articles));
        };
        fetchNews();
    }, []);


    // const fetchNews = () => {
    //     axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=e21dccbfdd9240a99ad60369a131439f')
    //         .then((response) => {
    //             dispatch(addNews(response.data.articles));
    //         })
    // }


    // useEffect(() => {
    //     fetchNews()
    // }, [])

    return (
        <>
            <div>
                <Navbar /> <br />
                <NewsListing />
            </div>
        </>
    )
}

export default Home
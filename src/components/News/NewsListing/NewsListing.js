import React from 'react'
import { useSelector } from 'react-redux'
import { getAllNews } from '../../../redux/reducers/News/NewsSlice'
import NewsCard from '../NewsCards/NewsCard';

const NewsListing = () => {
  const news = useSelector(getAllNews);
  let renderNews = "";

  renderNews =
  news.map((news, id) => {
    return(
      <NewsCard key={id} data={news} />
    );
      
  });

  // renderNews = 
  // news.Response === "True" ? (
  //   news.map((news, id) => (
  //     <NewsCard key={id} data={news} />
  //   ))
  // ) : (
  //   <div>
  //         <h3>{news.Error}</h3>
  //    </div>
  // );  

  return (

    <div className='container'>
      <div className='row'>
        {renderNews}
      </div>
    </div>
  );
}

export default NewsListing
import React from 'react';
import { Link } from 'react-router-dom';

function NewsCard(props) {
  const { data } = props;
  return (
    <>
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
    </>
  )
}

export default NewsCard
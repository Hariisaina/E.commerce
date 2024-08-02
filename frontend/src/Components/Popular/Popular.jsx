import React, { useEffect, useState } from 'react';
import './Popular.css';
import Item from '../Item/Item';

const Popular = () => {
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/popularinwomen')
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setPopularProducts(data);
        } else {
          console.error('Les données récupérées ne sont pas un tableau :', data);
        }
      })
      .catch((error) => console.error('Erreur lors de la récupération des données :', error));
  }, []);

  return (
    <div className='popular'>
      <h1>POPULAIRE CHEZ LES FEMMES</h1>
      <hr />
      <div className="popular-item">
        {popularProducts.map((item, i) => (
          <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        ))}
      </div>
    </div>
  );
};

export default Popular;

/** 

import React from 'react'
import './Popular.css'
import data_product from '../Assets/data.js'
import Item from '../Item/Item'

const Popular = () => {
  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
      </div>
    </div>
  )
}

export default Popular
**/
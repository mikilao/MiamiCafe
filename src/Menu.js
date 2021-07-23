import React from 'react';

const Menu = ({items}) => { // we are iterating over all of the items for App.js
  return <div className="section-center">
      {items.map((menuItem) => {
         const{id, title, img, desc, price}= menuItem;
         return <article key={id} className="menu-item">
             <img src={img} alt={title} className="photo"/>
             <header>
                 <h4>{title}</h4>
                 <h5 className="price">{price}</h5>
                 <p className="item-text">{desc}</p></header>
         </article>
      })}
  </div>;
};

export default Menu;
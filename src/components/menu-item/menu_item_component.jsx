import React from 'react';
import '../menu-item/menu-item_style.scss';

const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`${size} Menu-item`}>
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />

    <div className="label_action">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);
export default MenuItem;
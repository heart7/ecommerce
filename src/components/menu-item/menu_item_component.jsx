import React from 'react';
import '../menu-item/menu-item_style.scss';
import {withRouter} from 'react-router-dom';


const MenuItem = ({ title, imageUrl, size,linkUrl, history, match }) => (
  <div className={`${size} Menu-item`} onClick={()=>history.push(`${match.url} ${linkUrl}`)}>
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
export default withRouter(MenuItem);
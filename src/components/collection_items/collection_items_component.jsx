import React from "react";
import "../collection_items/collection_items_style.scss";

export const CollectionItems = ({ id, name, imageUrl, price }) => (
  <div className="collection-items">
    <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />

    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
  </div>
);

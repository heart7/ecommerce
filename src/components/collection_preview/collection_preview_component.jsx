import React from 'react';
import '../collection_preview/collection_preview_style.scss';
import {CollectionItems} from '../collection_items/collection_items_component';


export const CollectionPreview =({title, items})=>(
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
       {items.filter((item,indx) => indx < 4).map(({id, ...otheritemsprops })=>(

       <CollectionItems key={id} {...otheritemsprops} />
         
       ))}

      </div>
    </div>
);


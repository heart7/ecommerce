import React from 'react';
import SHOP_DATA from './collection_data';
import { CollectionPreview } from './../../collection_preview/collection_preview_component';



export class ShopPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            collections: SHOP_DATA
        }
    }

   render(){
       const {collections} = this.state;
        return(

    <div>
   {collections.map(({id, ...othercollectionprops})=>(
   <div >
   <CollectionPreview key={id} {...othercollectionprops}/>
   </div>
   ))}
    </div>
);

   }



}
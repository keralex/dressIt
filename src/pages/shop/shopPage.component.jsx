import React, { Component } from 'react';
import Shop_data from './shop.data.js';
import CollectionPreview from '../../components/Collection-Preview/CollectionPreview.component.jsx';
class shopPage extends Component {
    constructor(props){
        super(props);
        this.state={
            collections:Shop_data
        }
    }
    render() {
        const {collections}=this.state;

        return (
            <div className='shop-page'>
              {
                  collections.map(({id, ...otherCollectionProps}) =>(
                      <CollectionPreview key={id} {...otherCollectionProps}/> 
                  ))
              }  
            </div>
        );
    }
}

export default shopPage;
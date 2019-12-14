import React, { Component } from 'react';
import Shop_data from './shop.data.js';
class shopPage extends Component {
    constructor(props){
        super(props);
        this.state={
            collections:Shop_data
        }
    }
    render() {
        return (
            <div>
                Shop Page
            </div>
        );
    }
}

export default shopPage;
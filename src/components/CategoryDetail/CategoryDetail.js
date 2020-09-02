import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoryDetail = (props) => {
    const {name} = props.product;
   
    return (            
        <div>
            <h4>This is category</h4>
            <h6>selected product: {name}</h6>
        </div>
    );
};

export default CategoryDetail;
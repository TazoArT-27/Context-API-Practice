import React from 'react';
import { useContext } from 'react';
import { CategoryContext } from '../../App';

const Shipment = () => {
    const [category, setCategory] = useContext(CategoryContext)
    return (
        <div>
            <h1>This is a Shipment: </h1>
            <button onClick={() => setCategory(category + 1)}>click</button>
        </div>
    );
};

export default Shipment;
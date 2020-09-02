import React, { useContext, useState, useEffect } from 'react';
import CategoryDetail from '../CategoryDetail/CategoryDetail';
import { CategoryContext } from '../../App';

const allProducts = 
[{name:'Lenovo', category:'laptop'},
{name:'Asus', category:'laptop'},
{name:'samsung', category:'mobile'},
{name:'nokia', category:'mobile'},
{name:'canon', category:'camera'},
{name:'nikkon', category:'camera'},
{name:'mi', category:'mobile'},
{name:'hp', category:'laptop'},
{name:'sony', category:'camera'}]

const Categories = () => {
    const [category] = useContext(CategoryContext);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        console.log({category})
       const matchedProducts = allProducts.filter(pd => pd.category.toLowerCase() === category.toLowerCase());
       setProducts(matchedProducts);
    }, [category])
    return (
        <div>
            <h2>Select a category: {category}</h2>
            {
                products.map(pd => <CategoryDetail product={pd}></CategoryDetail>)
            }
            
        </div>
    );
};

export default Categories;
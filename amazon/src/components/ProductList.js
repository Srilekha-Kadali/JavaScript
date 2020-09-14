import React from 'react';
import Product from './Product';

//props is the property declared on product
//props contains two things:- productDetails and handleClick
const ProductList = (props) => {
    const products = [{
        name:"iPhone",
        price:"100000",
        imageUrl:"https://cdn.vox-cdn.com/thumbor/PDPaybexLzPoXsQAPeC1uvJoxWg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19212737/akrales_190918_3645_0166.jpg"
    },
{
    name:"One Plus",
    price:"500000",
    imageUrl:"https://cdn.vox-cdn.com/thumbor/PDPaybexLzPoXsQAPeC1uvJoxWg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19212737/akrales_190918_3645_0166.jpg"
}];
//handleClick is an event;method
    const update=(data)=>{
        console.log("I Clicked!");
        props.updateCart(data);
    }
    return <div className="row">
        {products.map((item, index)=>{
            //props contains two things:- productDetails and handleClick
            return <Product 
            productDetails={item} 
            handleClick={update} />
            //return <Product productDetails="item" />
        })}
        </div>
}

export default ProductList;
import React from 'react';

//Sending data from child to parent
const Product = (props) => {
    console.log(props);
    return <div className="col-md-3">
        <div className="card">
            <img className="card-img-top" src={props.productDetails.imageUrl} alt="Card image cap" />
            <div className="card-body">
                <p className="card-text">{props.productDetails.name}</p>
                <button className="btn btn-primary"
                 onClick={e=>{
                     props.handleClick(props.productDetails);
                 }}>
                     Add to cart <br />
                     {props.productDetails.price}</button>
            </div>
        </div>
        </div>
}

export default Product;
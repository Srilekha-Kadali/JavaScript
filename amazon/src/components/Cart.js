import React from 'react';

const cart = (props)=>{
    return <a className="nav-link" href="#">
        Cart {props.cartCount}
        </a>
}

export default cart;
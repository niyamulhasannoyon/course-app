import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total, course) => total + course.price, 0);
    return (
        <div>
            <h2>Your Cart</h2><br />
            <h4>Product list: {cart.length}</h4>
            <h4>Total Price: ${totalPrice}</h4>
        </div>
    );
};

export default Cart;
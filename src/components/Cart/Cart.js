// Import needed files
import React from 'react';
// Font awesome icon added
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'

import './Cart.css';

// Cart component
const Cart = (props) => {
    // Destructuring props
    const { cart } = props;
    const totalReducer = (previous, doctor) => previous + doctor.salary;
    const totalDoctorReducer = (previous, selectedDoctor) => previous + selectedDoctor.name + ' ' + '; ';
    const total = cart.reduce(totalReducer, 0);
    const totalSelectedDoctor = cart.reduce(totalDoctorReducer, []);
    return (
        // Cart design for show on UI
        <div className="cart-container">
            <h4><span className="text-danger"><FontAwesomeIcon icon={faUser} /> Players Added: </span><span className="text-primary">{props.cart.length}</span></h4>
            <br />
            <h4><span className="text-danger">Total Cost: </span> <br /> <span className="text-primary">${total}</span></h4>
            <h5 className="total-selected-doctor">{totalSelectedDoctor}</h5>
            <br />
            <br />
            <button className="btn btn-warning">Buy Now</button>
        </div>
    );
};

// Export Cart Component
export default Cart;
// Import needed files
import React from 'react';
// Font awesome icon added
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './DoctorList.css'

// DoctorList Component
const DoctorList = (props) => {
    // Data destructuring
    const { img, name, age, country, salary, expertIn } = props.doctor;
    // console.log(props);
    return (
        // Card design for show on UI
        <div className="doctor-card">
            <img src={img} className="card-img card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title text-warning">{name}</h5>
                <p className="card-text text-info">Age: {age}</p>
                <p className="card-text text-info">Country: {country}</p>
                <small><p className="card-text text-info">Expert In: {expertIn}</p></small>
                <p className="card-text text-info">Salary: ${salary}</p>
                <button onClick={() => props.handleAddToCart(props.doctor)} className="btn btn-warning text-light"><FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
            </div>
        </div>
    );
};

// Export DoctorList
export default DoctorList;
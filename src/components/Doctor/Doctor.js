// Import needed files
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import DoctorList from '../DoctorList/DoctorList';
import './Doctor.css'

// Doctor Component
const Doctor = () => {
    // useState set
    const [doctors, setDoctors] = useState([]);
    const [cart, setCart] = useState([]);

    // useEffect set
    useEffect(() => {
        // Data Load
        fetch('./doctors.JSON')
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, [])

    // Event handler added
    const handleAddToCart = (doctor) => {
        const newCart = [...cart, doctor];
        setCart(newCart);
    }
    return (
        <div className="doctor-container container">
            <div className="doctor-list">
                {
                    doctors.map(doctor => <DoctorList
                        key={doctor.name}
                        doctor={doctor}
                        handleAddToCart={handleAddToCart}
                    ></DoctorList>)
                }
            </div>
            <div>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

// Export Doctor Component
export default Doctor;
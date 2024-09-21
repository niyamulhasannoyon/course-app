import React from 'react';
import './Course.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Course = (props) => {
    const {name, description, price,duration} = props.course;
    const style = {
        backgroundColor: 'white',
        margin: '10px',
        padding: '20px',
        borderRadius: '10px',
        // width: '300px',
        boxShadow: '0 5px 5px rgba(0,0,0,0.4)'
    }
    const mainStyle ={
        marginBottom: '10px',
        fontSize: '18px',
        cursor: 'pointer',
        color: '#333',
        fontWeight: 'bold',
        borderRight: '1px solid white',
        textDecoration: 'none',
        color: '#333',
    }
    const addToCart = props.addToCart;
    return (
        <div className="main border-bottom border-right" style={mainStyle}>
        <div style={style}>
            <h1 className='bg-primary text-white rounded-3xl'>{name} </h1>
            <p>{description}</p>
            <p>Duration: {duration}</p>
            <p>Price: ${price}</p>
            <button onClick={() => addToCart(props.course)} className='btn border border-2 bg-danger text-white'><FontAwesomeIcon icon={faShoppingCart} /> Enroll Now</button>
        </div>
        </div>
    );
};

export default Course;
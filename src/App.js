import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Course from './course/Course';
import { useState } from 'react';
import Cart from './cart/Cart';

function App() {
  const data = [
    {
        id: 1,
        name: 'Web Development',
        description: 'Learn the basics of web development',
        duration: '3 months',
        price: 2000,
    },
    {
        id: 2,
        name: 'Data Science',
        description: 'Learn the basics of data science',
        duration: '6 months',
        price: 3000,
    },
    {
        id: 3,
        name: 'UI/UX Design',
        description: 'Learn the basics of UI/UX design',
        duration: '4 months',
        price: 2500,
    },
    {
        id: 4,
        name: 'Graphics',
        description: 'Learn the basics of Graphics design',
        duration: '5 months',
        price: 2500,
    },
    {
        id: 5,
        name: 'Game Development',
        description: 'Learn the basics of game development',
        duration: '2 months',
        price: 1500,
    },
    {
        id: 6,
        name: 'Software Development',
        description: 'Learn the basics of software development',
        duration: '3 months',
        price: 2000,
    },
    {
        id: 7,
        name: 'Digital Marketing',
        description: 'Learn the basics of digital marketing',
        duration: '4 months',
        price: 2500,
    },
    {
        id: 8,
        name: 'Mobile Development',
        description: 'Learn the basics of mobile development',
        duration: '3 months',
        price: 2000,
    },
    {
        id: 9,
        name: 'Artificial Intelligence',
        description: 'Learn the basics of artificial intelligence',
        duration: '5 months',
        price: 2500,
    },
    {
        id: 10,
        name: 'Cybersecurity',
        description: 'Learn the basics of cybersecurity',
        duration: '6 months',
        price: 3000,
    },{
        id: 11,
        name: 'Blockchain Development',
        description: 'Learn the basics of blockchain development',
        duration: '4 months',
        price: 2500,
    },
    {
        id: 12,
        name: 'Project Management',
        description: 'Learn the basics of project management',
        duration: '3 months',
        price: 2000,
    },
    {
        id: 13,
        name: 'Digital Marketing',
        description: 'Learn the basics of digital marketing',
        duration: '4 months',
        price: 2500,
    },
    {
        id: 14,
        name: 'Mobile Development',
        description: 'Learn the basics of mobile development',
        duration: '3 months',
        price: 2000,
    },
    {
        id: 15,
        name: 'Artificial Intelligence',
        description: 'Learn the basics of artificial intelligence',
        duration: '5 months',
        price: 2500,
    }
]
const [cart, setCart] = useState([])

const addToCart = (course) => {
  setCart([...cart, course])
}
  return (
    <div className="App">
      <div className="header">
        <h1 className='mt-3 '>Welcome <br /> Noyon's Academy</h1><br/>
        <p><FontAwesomeIcon icon={faShoppingCart} /></p>
        <p>Learn the basics of various fields and create your own career</p>
        <br /> <h3>Different 15 Courses for Freelancing</h3>
      </div>
      <div className="folder">
      <div className="box">
      {
          data.map((course, index)=> <Course key={index} addToCart={addToCart} course={course}></Course>)
      }
      </div>
      <div className="cart mt-3 pt-3">
        <Cart cart={cart}></Cart>
      </div>
      </div>
    </div>
  );
}

export default App;

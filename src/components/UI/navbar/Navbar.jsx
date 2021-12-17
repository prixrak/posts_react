import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to='/about'>About us</Link>
      <Link to='/posts'>Posts</Link>
    </div>
  );
};

export default Navbar;
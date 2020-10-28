import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div>
      <h1>BenderDex</h1>
      <Link to={'/'}>Home</Link>
    </div>
  );
};



export default Header;
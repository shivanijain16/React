import React from 'react';
import ReactDOM from 'react-dom/client';

const navBar = (
  <nav>
    <img
      id='logo'
      src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
      alt='React logo'
    />
    <input id='search' type='text' placeholder='Search here' />
    <ul>
      <li>Home</li>
      <li>About us</li>
      <li>User</li>
    </ul>
  </nav>
);
const HeaderComponent = () => {
  return <div>{navBar}</div>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeaderComponent />);

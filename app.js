import React from 'react';
import ReactDOM from 'react-dom';

const heading = React.createElement('h1', {}, 'Hello');
const heading2 = React.createElement('h2', {}, 'Inner');
const heading1 = React.createElement(
  'h1',
  { id: 'container', style: { color: 'red' } },
  'Outside container'
);
const container = React.createElement('div', { id: 'container' }, [
  heading,
  heading2,
]);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render([heading1, container]);

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
const Hello = () => {
    return (
      <div>
        <h2>Hello</h2>
        <h4>Nice to meet you...</h4>
      </div>
    )
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Hello/>);
  root.render(<App/>);
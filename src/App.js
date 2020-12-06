import React from 'react';

function  clicked() {
  console.log('Clicked!');
}

function App() {
  return (
    <div>
      <h1>Hello World!</h1>
      <button onClick={clicked}>Click Me!</button>
    </div>
  )
}

export default App;
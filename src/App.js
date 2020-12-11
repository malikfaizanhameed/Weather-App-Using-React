import React, { useState } from 'react';
import Form from './Form';
import Tile from './Tile';
import Footer from './Footer';
import Header from './Header';



function App() {
  const [state, setState] = useState({ cityName: '', response: '' });
  // console.log('FROM APP', state);

  async function handleClick(e) {
    e.preventDefault();
    
    console.log('Handle Click!');
    
    //API call
    const apiKey = 'f84009647ce2a9db9dcff46b58632a4b';
    try {
      //select city entered
      const inputVal = state.cityName;
      
      //API call
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&units=metric&appid=${apiKey}`;

      //wait for response and convert into JSON format
      const resp = await fetch(url);
      const data = await resp.json();
      // console.log('FROM handleClick', data);
      setState({ cityName: inputVal, response: data });
      // console.log('FROM handleClick 2222', state.response);
      // console.log('after state change');

    } catch {
      console.log('Error agaya!!!');
      //reset with error message
      // reset('Please enter a valid city name!');
    };
  }
  return (
    <>
      <Header />
      <Form
        onChange={(value) => setState({ cityName: value })}
        handleClick={handleClick}
      />
      <Tile data={state.response}/>
      <Footer />
    </>
  )
}

export default App;

import React from 'react';
import "./style.css"

import foodBloggersData from './qutes.json'

function App() {
  return (
    <div className="App">
      <h1 className='headingf'>Food Bloggers Quotes</h1>
      <div className='quotescontainer'>
        {foodBloggersData.food_bloggers.map((blogger, index) => (
          <div key={index} className='contentblogger'>
            <p className='bloggerqute'>{blogger.quote}</p> <p className='bloggername'>{blogger.name}</p>
          </div>
        ))}
      </div>
    </div>
  );


}

export default App;


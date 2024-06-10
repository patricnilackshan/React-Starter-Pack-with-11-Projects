// This line imports the React library.
import React from 'react'

// This is a functional component in React named 'Card'.
// It takes one prop: 'username'.
function Card({username}) {
  // The component returns a JSX (JavaScript XML) element.
  // JSX allows us to write HTML-like syntax in our JavaScript code which makes it easier to understand and write.
  return (
    <div>
        <img 
          className='w-40 rounded-md' 
          src="https://avatars.githubusercontent.com/u/126662734"
        />
        <h1 className='text-2xl bg-blue-500 p-3 mb-6 rounded-md'>
          {username}
        </h1>
    </div>
  )
}

// The 'Card' component is exported so it can be imported and used in other parts of the application.
export default Card
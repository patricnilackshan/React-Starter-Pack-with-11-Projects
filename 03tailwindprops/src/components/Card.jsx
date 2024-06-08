import React from 'react'

function Card({username}) {
  return (
    <div>
        <img className='w-40 rounded-md' 
        src="https://avatars.githubusercontent.com/u/126662734" />

        <h1 className='text-2xl bg-blue-500 p-3 mb-6 rounded-md'>{username}</h1>

    </div>
  )
}

export default Card
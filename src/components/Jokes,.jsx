import React, { useState } from 'react'
import '../assets/Joke.css'
import useJokesFetch from '../hooks/useJokesFetch'
const Jokes = () => {
    const [action,setAction] = useState(false)

    const {joke} = useJokesFetch('https://v2.jokeapi.dev/joke/any',action)
  return (
    <div className='jokes-wrapper'>
        <div className='joke-container'>
            <p className='joke'>{joke?.setup}</p>
            <p className='joke-ans'>{joke?.delivery}</p>
            <button onClick={() => setAction(!action)}>click me</button>
        </div>

    </div>
  )
}

export default Jokes
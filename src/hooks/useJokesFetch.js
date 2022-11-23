import React, { useEffect, useState } from 'react'

const useJokesFetch = (url,action) => {
    const [joke,setJoke] = useState(null)
    
    const getJoke = async () => {
        const res = await fetch(url)
        const data = await res.json()
        setJoke(data)
        console.log(data)
    }

    useEffect(() => {
        getJoke()
    },[action])

    return {joke, getJoke}
}

export default useJokesFetch
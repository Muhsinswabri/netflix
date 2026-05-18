import React, { useEffect, useState } from 'react'
import './RowPost.css'
import {imageUrl} from '../../constants/constants'
import axios from '../../axios'

function RowPost(props) {

  const [movies, setMovies] = useState([])

 useEffect(() => {

  axios.get(props.url)
    .then((response) => {
      console.log(response.data)
      setMovies(response.data.results)
    })

}, [props.url])

  return (
    <div className='row'>
      <h2>{props.title}</h2>

      <div className='posters'>
        {movies.map((obj) => (
          <img
            key={obj.id}
            className={props.isSmall ? 'smallPsoter' : 'poster'}
            alt='poster'
            src={`${imageUrl + obj.backdrop_path}`}
          />
        ))}
      </div>

    </div>
  )
}

export default RowPost
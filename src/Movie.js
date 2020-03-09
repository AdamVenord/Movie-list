import React from 'react'

const Movie = ({ id, name, complete, movieClick }) => (
  <li 
    style={ complete ? { ...styles.movie, ...styles.complete } : styles.movie }
    onClick={ () => movieClick(id) }
  >
    { name }
  </li>
)

const styles = {
  movie: { cursor: 'pointer' },
  complete: { color: 'grey', textDecoration: 'line-through' },
}

export default Movie
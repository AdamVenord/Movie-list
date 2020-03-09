import React from "react"
import Movie from './Movie'

const List = ({ items, name, movieClick}) => (
  <div>
    <h2>{name}</h2>
    <ul>
      { items.map( item => <Movie key={item.id} {...item} movieClick={movieClick} /> )}
    </ul>
  </div>
)

export default List
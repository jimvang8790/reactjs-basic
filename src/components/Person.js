// List Rendering
import React from 'react'

function Person({person}) {
  return (
    <div>
      <h3>My name is {person.name}. I am {person.age} years old. I am good at {person.skills} beacuse I'm {person.hero}.</h3>
    </div>
  )
}

export default Person

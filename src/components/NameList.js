// List Rendering
import React from 'react'
import Person from './Person';

function NameList() {
    // 1) create an array of names
    const names = ['Bruce', 'Clark', 'Diana', 'Bruce']
    // to keep the return statement simple by moving out the list rendering logic
    // the {names.map(name => <h3>{name}</h3>)} was inside the render
    // Index as key anti-pattern
    // key={name} is not possible since there are dublicates of the same name, so we can add index, which is always unique
    const nameList = names.map((name, index) => <h3 key={index}>{index}. {name}</h3>)

    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skills: 'React',
            hero: 'Batman'
        },
        {
            id: 2,
            name: 'Clark',
            age: 32,
            skills: 'Angular',
            hero: 'Superman'
        },
        {
            id: 3,
            name: 'Diana',
            age: 28,
            skills: 'Vue',
            hero: 'Wonderwoman'
        }
    ]
    // key can be anything as long as it's unique
    const personList = persons.map(person => <Person key={person.id} person={person}/>)
    // const nameList = names.map(name => <h2>{name}</h2>)
  return (
    <div>
      {nameList}
      <h3>{personList}</h3>
    </div>
  )
}

export default NameList

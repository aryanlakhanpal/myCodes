import React from 'react'

function AboutMe(propt) {
  return (
    <>
    <div>
    <h3>My name is ::<h2>{propt.name}</h2></h3>
    <h3>My surname is <h2>{propt.surname}</h2></h3>
    </div>
    </>
  )
}

export default AboutMe
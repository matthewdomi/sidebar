import React from 'react'

const Antonyms = ({mean}) => {
    console.log(mean);
  return (
    <div className='  '>{mean.map(val => val.meanings.map(means => means.definitions.map(def=>(
        <div key={def.antonyms}>
            <li>{def.antonyms}</li>
            <hr/>
        </div>
    ))))}</div>
  )
}

export default Antonyms
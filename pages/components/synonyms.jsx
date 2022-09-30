import React from 'react'

const Synonyms = ({mean}) => {
    console.log(mean);
  return (
    <div className='column-2 md:columns-3 '>{mean.map(val => val.meanings.map(means => means.definitions.map(def=>(
        <div key={def.synonyms}>
            <li>{def.synonyms}</li>
            <hr/>
        </div>
    ))))}</div>
  )
}

export default Synonyms
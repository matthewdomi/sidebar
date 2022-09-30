import React from 'react';

const Phonetics = ({ mean }) => {
  console.log(mean);
  return (
    <div>
      {mean.map((val) =>
        val.meanings.map((means) =>
          means.definitions.map((def) => (
            <div key={def.phonetics}>
              <li>{def.phonetics}</li>
            </div>
          ))
        )
      )}
    </div>
  );
};

export default Phonetics;

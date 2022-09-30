import React from 'react';

const Example = ({ mean }) => {
  console.log(mean);
  return (
    <div>
      {mean.map((val) =>
        val.meanings.map((means) =>
          means.definitions.map((def) => (
            <div key={def.example}>
              {def.example ? <li>{def.example}</li> : ''}
            </div>
          ))
        )
      )}
    </div>
  );
};

export default Example;

import React from 'react';

const Rank = ({name, entries}) => {
  return (
    <div>
      <div className='white f3'>
        {`${name}, your current entry count is.. `}
        <div className='white f1'>
          {entries}
        </div>
        <p>Face App will detect the faces in each picture submitted. Try it!!</p>
      </div>
    </div>
  );
}

export default Rank;

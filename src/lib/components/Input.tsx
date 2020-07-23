import React from 'react';

const Questions = (props: any) => {
  return (
    <div>
      <div>{props.title}</div>
      <input value={props.value} onChange={props.callback} />
    </div>
  );
}

export default Questions;
import React from 'react';

const Questions = (props: any) => {
  return (
    <div>
      <div>{props.title}</div>
      <textarea value={props.value} onChange={props.callback} />
    </div>
  );
}

export default Questions;
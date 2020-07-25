import React from 'react';

const WorkPage = ({item} : {item: any}) => {
  return (
    <div className="work_item_wrapper">
      {
        item.image && <img src={item.image} className="work_item_image" />
      }
      <div className="work_item_title" >{item.title}</div>
      <div className="work_item_description" >{item.description}</div>
      <div className="work_item_more" > > View Case</div>
    </div>
  );
}

export default WorkPage;
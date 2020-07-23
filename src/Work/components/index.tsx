import React, { useEffect } from 'react';
import WorkItem from './WorkItem';
import FilterItems from './FilterItems';
import '../index.css';

const WorkPage = (props: any) => {
  useEffect(() => {
    props.loadData()
  }, []);
  return (
    <div className="work_wrapper">
      <FilterItems />
      <div className="work_list">
        {
          props.workItems.map(
            (workItem:any, index: number) => (
              <WorkItem key={index} item={workItem}/>
          ))
        }
      </div>
    </div>
  );
}

export default WorkPage;
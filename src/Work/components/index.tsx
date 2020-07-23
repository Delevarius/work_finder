import React, { useEffect } from 'react';
import WorkItem from './WorkItem';
import FilterItems from './FilterItems';

const WorkPage = (props: any) => {
  useEffect(() => {
    props.loadData()
  }, []);
  return (
    <div>
      <FilterItems />
      {
        props.workItems.map((workItem:any) => <WorkItem />)
      }
    </div>
  );
}

export default WorkPage;
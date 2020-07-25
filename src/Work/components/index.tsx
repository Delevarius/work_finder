import React, { useEffect, Props } from 'react';
import WorkItem from './WorkItem';
import FilterItems from './FilterItems';
import '../index.css';

const WorkPage = (props: any) => {
  useEffect(() => {
    props.loadData()
  }, []);
  const workItems = props.workItems
    .filter((workItem:any) => props.currentIndustryFilter === workItem.industry || props.currentIndustryFilter === 'all industries')
    .filter((workItem:any) => props.currentCategoryFilter === workItem.category || props.currentCategoryFilter === 'all work');
  return (
    <div className="work_wrapper">
      <FilterItems
        filterIndustryOptions={props.filterIndustryOptions}
        filterCatergoryOptions={props.filterCatergoryOptions}
        currentIndustryFilter={props.currentIndustryFilter}
        currentCategoryFilter={props.currentCategoryFilter}
        setIndustryFilter={props.setIndustryFilter}
        setCatergoryFilter={props.setCatergoryFilter}
      />
      <div className="work_list">
        {
            workItems.map(
            (workItem:any, index: number) => (
              <WorkItem key={index} item={workItem}/>
          ))
        }
      </div>
    </div>
  );
}

export default WorkPage;
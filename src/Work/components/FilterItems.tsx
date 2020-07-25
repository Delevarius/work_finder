import React from 'react';

const Filter = (props:any) => (
    <div className="filter_wrapper">
        <div className="filter_option_wrapper">
            <div>Show me</div>
            <select
                value={props.currentCategoryFilter}
                onChange={(e: any) => {
                    props.setCatergoryFilter(e.target.value)
                }}
            >
                {
                    props.filterCatergoryOptions.map((o:string) => (
                    <option value={o}>{o}</option>
                    ))
                }
            </select>
        </div>
        <div className="filter_option_wrapper">
            <div>in</div>
            <select
                value={props.currentIndustryFilter}
                onChange={(e:any) => {
                    props.setIndustryFilter(e.target.value)
                }}
            >
                {
                    props.filterIndustryOptions.map((o:string) => (
                    <option value={o}>{o}</option>
                    ))
                }
            </select>
        </div>
    </div>
);

export default Filter;
import React from 'react';

const Filter = () => {
  return (
    <div className="filter_wrapper">
        <button>View Case</button>
        <div className="filter_option_wrapper">
            <div>Show me</div>
            <select>
                <option>all work</option>
            </select>
        </div>
        <div className="filter_option_wrapper">
            <div>in</div>
            <select>
                <option>all industries</option>
            </select>
        </div>
    </div>
  );
}

export default Filter;
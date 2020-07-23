import React from 'react';

const Filter = () => {
  return (
    <div>
        <button>View Case</button>
        <div>
            <div>Show me</div>
            <select>
                <option>all work</option>
            </select>
        </div>

        <div>
            <div>in</div>
            <select>
                <option>all industries</option>
            </select>
        </div>
    </div>
  );
}

export default Filter;
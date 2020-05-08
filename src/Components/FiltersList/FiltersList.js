import React from 'react';
import './FiltersList.css';
import FilterItem from '../FilterItem/FilterItem';

function Filters(props) {
  return (
    <div className="filtersList">
      {props.filters.map((item, index) => (
        <FilterItem key={index} item={item} />
      ))}
    </div>
  );
}

export default Filters;

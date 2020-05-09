import React from 'react';
import './FiltersList.css';
import FilterItem from '../FilterItem/FilterItem';
import { filters } from '../../filter';
import { Link } from 'react-router-dom';

class FiltersList extends React.Component {
  render() {
    if (!filters) {
      return <div>Error: could not load the cars filters}</div>;
    } else if (!filters.length) {
      return <div>You have no filters at the moment.</div>;
    } else {
      return (
        <div className="filtersList">
          {filters.map((item, index) => (
              <FilterItem key={item.id} item={item} />
          ))}
        </div>
      );
    }
  }
}

export default FiltersList;

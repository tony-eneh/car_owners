import React from 'react';
import './FiltersList.css';
import FilterItem from '../FilterItem/FilterItem';
import { filters } from '../../filter';
import { Link } from 'react-router-dom';

class FiltersList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      filters: [],
      isLoading: true,
      error: false
    }
  }

  componentDidMount(){
    console.log(filters);
    fetch('https://ven10.co/assessment/filter.json')
    .then(res => res.json())
    .then(data => this.setState({filters: data, isLoading: false}))
    .catch(err => {
      this.setState({error: true, isLoading: false}); 
      console.error(err)
    })
    .finally(() => {
      // if it doesn't fetch, use local source
      console.log('finally ran')
      console.log(this.state.filters)
      if(!this.state.filters.length){
        this.setState({filters: filters, error: false, isLoading: false})
      }
      console.log('filters after finally', this.state.filters)
    });
  };

  render() {
    return (
      <div className="filtersList page-content">
        <h2 class="page-title">Filter</h2>
        {this.state.isLoading &&  <div>Loading...</div>}
        {this.state.error && <div>Error: could not load the cars. Try some seconds later</div>}
        {this.state.filters.length > 0 &&
          filters.map((item, index) => 
              <FilterItem key={item.id} item={item} />
          )}
      </div>
    );
  }
}

export default FiltersList;

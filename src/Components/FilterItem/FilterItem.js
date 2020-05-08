import React from 'react';
import './FilterItem.css';

function FilterItem(props){

    const filter = props.item;
    return(
        <div className='filter-item'>
            <h3>{filter.start_year} - {filter.end_year}</h3>
            <h4>{filter.gender}</h4>
            <ul className='countries'>
                { filter.countries.map((country) => <li>{country}</li>) }
            </ul>
            <ul className='colors'>
                { filter.colors.map((color) => {

                return <li style={{ backgroundColor : color }} className='color'></li>
                
                })
            }
            </ul>
        </div>
    );
}

export default FilterItem;
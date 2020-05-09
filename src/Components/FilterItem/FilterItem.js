import React from 'react';
import { Link } from 'react-router-dom';
import './FilterItem.css';

function FilterItem(props){

    const filter = props.item;
    return(
        <Link to={`/cars?filter=${filter.id}`}>
            <div className='filter-item card'>
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
        </Link>
    );
}

export default FilterItem;
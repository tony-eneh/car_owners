import React, { useState, useEffect } from 'react';
import './CarsList.css';
import CarItem from '../CarItem/CarItem';
import { filters } from '../../filter';
import { useLocation, useParams } from 'react-router-dom';
import qs from 'qs';

function Cars(props) {

  // declare state variables
  const [cars, setCars] = useState(null); /* use null as initial state, to be able differentiate it from an empty response.*/
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  // Fetch the correct filter using the passed in id query param
  // - parse query parameters.
  // - refer to filter property as ?filter because unfortunately qs parser does not strip it 
  let filterId = qs.parse(useLocation().search)['?filter'];
  const carFilter = filters.find((item) => item.id === +filterId )

  // TODO: use the filter object to form query for backend.
  // Query the backend using fetch api. assign to variable "cars"
  useEffect(()=>{
    fetch(`${process.env.REACT_APP_CAR_OWNERS_API}?filter=${JSON.stringify(carFilter)}`)
    .then((res) => res.json())
    .then(data => {setIsLoading(false); setCars(data); console.log('fetched data',data)})
    .catch((err)=> {setIsLoading(false); setError(true); console.error('fetch error', err)});
  });

  // TODO: cache query in indexdb for faster loading next time
  
  return (
    <div className="CarsList page-content">
      <h2 className="page-title">Car Owners</h2>
      {isLoading && !error && <p>Loading...</p>}
      {error && <p>An Error occured while fetching the cars. Try again after a few seconds.</p>}
      { 
        // support for empty server response
        (cars && !cars.length) && <div>This filters matched zero cars. Go back and try another filter.</div>
      }
      {(cars && cars.length > 0) && cars.map((item, index) => (
        <CarItem key={index} item={item} />
      ))}
    </div>
  );
}

export default Cars;

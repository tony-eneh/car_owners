import React, { useState, useEffect } from 'react';
import './CarsList.css';
import CarItem from '../CarItem/CarItem';
import { filters } from '../../filter';
import { useLocation, useParams } from 'react-router-dom';
import qs from 'qs';

function Cars(props) {

  // declare state variables
  const [cars, setCars] = useState([]);
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
    fetch(`https://ven10-carowners-api.herokuapp.com/api/car_owners?filter=${JSON.stringify(carFilter)}`)
    .then((res) => res.text())
    .then(data => {setIsLoading(false); setCars(data); console.log('fetched data',data)})
    .catch((err)=> {setIsLoading(false); setError(true); console.error('fetch error', err)});
  });

  // TODO: cache query in indexdb for faster loading next time
  
  return (
    <div className="CarsList">
      {isLoading && !error && <p>Loading...</p>}
      {error && <p>An Error occured while fetching the cars. Try again after a few seconds.</p>}
      {cars.map((item, index) => (
        <CarItem key={index} item={item} />
      ))}
    </div>
  );
}

export default Cars;

import React from 'react';
import './CarsList.css';
import CarItem from '../CarItem/CarItem';

function Cars(props) {
  return (
    <div className="CarsList">
      {props.cars.map((item, index) => (
        <CarItem key={index} item={item} />
      ))}
    </div>
  );
}

export default Cars;

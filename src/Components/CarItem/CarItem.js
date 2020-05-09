import React from 'react';
import carImage from '../../car.png';
import './CarItem.css';

function CarItem(props){

    const car = props.item;
    return(
        <div className='car-item card'>
            <div className='card-thumbnail'>
                <img src={carImage} alt='a car'/>
            </div>
            <div className='card-details'>
                <h3>{car.last_name} {car.first_name}</h3>
                <div className='row'>
                    <div className='brand demarcated'>
                        Brand<span>{car.car_model}</span>
                    </div>
                    <div className='year demarcated'>
                        Year<span>{car.car_model_year}</span>
                    </div>
                    <div className='Color'>
                        Color<span>{car.car_color}</span>
                    </div>
                </div>
                <div className='row'>
                <div className='country'>
                        Country<span>{car.country}</span>
                    </div>
                    <div className='gender'>
                        Gender<span>{car.gender}</span>
                    </div>
                    <div className='job'>
                        Job<span>{car.job_title}</span>
                    </div>
                </div>
                <div className='email'>
                    Email: <span>{car.email}</span>
                </div>
                <div className='bio truncate'>
                    Bio: <span className=''>{car.bio}</span>
                </div>
            </div>
        </div>
    );
}

export default CarItem;
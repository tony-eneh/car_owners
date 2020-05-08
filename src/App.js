import React from 'react';
import './App.css';
import FiltersList from './Components/FiltersList/FiltersList';

function App() {
  let filters = [
    { 
      id: 1,
      start_year: 1991,
      end_year: 2009,
      gender: "male",
      countries: [
      "Brazil",
      "Ireland",
      "Egypt",
      "Poland",
      "Niger",
      "Greece",
      "Peru"
      ],
      colors: [
      "Green",
      "Violet",
      "Yellow",
      "Blue"
      ]},
    { 
      id: 2,
      start_year: 1990,
      end_year: 2010,
      gender: "",
      countries: [
      "Russia",
      "Portugal",
      "Vietnam",
      "Croatia",
      "Uganda",
      "Iran"
      ],
      colors: [
      "Teal",
      "Maroon",
      "Red"
      ]},
    {
      id: 3,
      start_year: 2001,
      end_year: 2009,
      gender: "female",
      countries: [ ],
      colors: [
      "Red",
      "Aquamarine",
      "Orange",
      "Mauv"
      ]}
  ];
  return (
    <div className="App">
      <FiltersList filters={filters} />
    </div>
  );
}

export default App;

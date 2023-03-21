import React from 'react';
import './Country.css';

const Country = (props) => {



    //destructuring 
    const {name, population, flags} = props.country;


    return(
        <div className='single-country'>
           
            <div className='single-country-left'>
                <img src={flags.png} alt={flags.alt}></img>
            </div>
          <h2>Name: {name.common}</h2>
          <h4>Population: {population}</h4>
        </div>
      ) 





    // console.log(props);
    // return(
    //     <div className='single-country'>
           
    //         <div className='single-country-left'>
    //             <img src={props.country.flags.png} alt={props.country.flags.alt}></img>
    //         </div>
    //       <h2>Name: {props.country.name.common}</h2>
    //       <h4>Population: {props.country.population}</h4>
    //     </div>
    //   ) 





};

export default Country;
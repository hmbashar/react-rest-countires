import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './LoadCountries.css';

const LoadCountries = () => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => setCountries(data))
    }, []);

    return (
        <div>
            <h1 className='text-3xl text-center m-5 p-5'>Visiting Every Country of the world!!!</h1>
            <h3>Available Countries: {countries.length}</h3>
            <div className='display-countries'>
                {
                    countries.map(country => <Country 
                        country= {country}
                        key={country.cca3}
                        
                        // name={country.name.common} 
                        // population={country.population} 
                        // flag={country.flags.png} 
                        // alt={country.flags.alt}
                        
                        > </Country>)
                }
            </div>

        </div>
    )
};

export default LoadCountries;
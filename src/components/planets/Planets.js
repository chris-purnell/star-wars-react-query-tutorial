import React from 'react';
import { useQuery } from 'react-query';
import PlanetItem from './PlanetItem'

import { HeaderStyle } from './PlanetStyles'

const fetchPlanets = async () => {
    const res = await fetch('http://swapi.dev/api/planets/');
    return res.json();
}

const Planets = () => {
    const { data, status } = useQuery('planets', fetchPlanets)
    
    return (
        <div>
            <HeaderStyle> Star Wars Planets </HeaderStyle>

            { status === 'loading' && (
                <div>Loading data...</div>
            )}
            
            { status === 'error' && (
                <div>Error fetching data</div>
            )}

            { status === 'success' && (
                <div>
                    { data.results.map(planet => <PlanetItem key={planet.name} planet={planet} />)}
                </div>
            )}
            
        </div>
    )
}

export default Planets;
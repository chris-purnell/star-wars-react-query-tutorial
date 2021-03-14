import React from 'react';
import { PlanetItemCard, PlanetName} from './PlanetStyles'

const PlanetItem = ({ planet }) => {

    return (
        <PlanetItemCard>
            <PlanetName>{ planet.name }</PlanetName>
            <p>Population: { planet.population }</p>
            <p>Terrain: { planet.terrain }</p>
            <p>Climate: { planet.climate }</p>
        </PlanetItemCard>
    )
}

export default PlanetItem
import React from 'react';
import { FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import { Map, TileLayer } from "react-leaflet";

import mapMarketImg from '../images/map-market.svg';

import "leaflet/dist/leaflet.css";
import '../styles/pages/orphanages-map.css'

const OrphanagesMap: React.FC = () => {
  return (
  
    <div id="page-map">
        <aside>
            <header>
                <img src={mapMarketImg} alt="Happy" />
                <h2>Escolha um orfanato no mapa</h2>
                <p>Muitas crianças estão esperando a sua visita :)</p>
            </header>

            <footer>
                <strong>Vespasiano</strong>
                <span>Minas Gerais</span>
            </footer>
        </aside>

        <Map 
            center={[ -19.6925891,-43.9231325 ]}
            zoom={15} 
            style={{ width: '100%', height: '100%' }}
        >
            <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            {/* <TileLayer  
                url={`https://api.mapbox.com/styles/v1/mapbox/satelite-v9/tiles/256/{z}/{x}/{y}@2x?acess_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
            /> */}
        </Map>

        <Link to="/" className="create-orphanage">
            <FiPlus size={24} color="#fff"/>
        </Link>
    </div>
         

  );
}

export default OrphanagesMap;
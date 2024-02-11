import React from 'react';
import './Partenaire.css';
import partenaire1Logo from '../images/logo.jpg';
import { Link } from 'react-router-dom';

const partenaires = [
    { imageUrl: partenaire1Logo, name: 'USTHB1' },
    { imageUrl: partenaire1Logo, name: 'USTHB2'},
    { imageUrl: partenaire1Logo, name: 'USTHB3' },
    { imageUrl: partenaire1Logo, name: 'USTHB4' },
    { imageUrl: partenaire1Logo, name: 'USTHB5' },
    { imageUrl: partenaire1Logo, name: 'USTHB6' },
    { imageUrl: partenaire1Logo, name: 'USTHB7' },
    { imageUrl: partenaire1Logo, name: 'USTHB8' }
];

function Partenaire() {
    // Divisez vos partenaires en deux groupes de quatre éléments
    const firstRowPartenaires = partenaires.slice(0, 4);
    const secondRowPartenaires = partenaires.slice(4);

    return (
        <div>
            <div className="header">SIGREX > Partenaires</div>
            <div className="partenaires-container">
                {firstRowPartenaires.map((partenaire, index) => (
                    <div className="partenaire-container" key={index}>
                        <Link to={`/details/${index + 1}`}>
                            <img src={partenaire.imageUrl} alt={partenaire.name} className="partenaire-image" />
                            <p className="partenaire-name">{partenaire.name}</p>
                        </Link>
                    </div>
                ))}
            </div>
            <div className="partenaires-container">
                {secondRowPartenaires.map((partenaire, index) => (
                    <div className="partenaire-container" key={index + firstRowPartenaires.length}>
                        <Link to={`/details/${index + firstRowPartenaires.length + 1}`}>
                            <img src={partenaire.imageUrl} alt={partenaire.name} className="partenaire-image" />
                            <p className="partenaire-name">{partenaire.name}</p>
                        </Link>
                    </div>
                ))}
            </div>
            <button className="footer-button">Devenir Partenaire</button>
        </div>
    );
}

export default Partenaire;

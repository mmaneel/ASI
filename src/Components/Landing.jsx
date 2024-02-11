import React, { useState } from 'react';
import './Landing.css';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function Landing() {
  const itemsPerPage = 3; 
  const [startIndex, setStartIndex] = useState(0); 

  
  const data = [
    { id: 1, title: 'CISCO1', description: 'CCNA 2 : Notions de base sur le routage et la commutation', duration: 'Durée : 05Jours' },
    { id: 2, title: 'CISCO2', description: 'CCNA 2 : Notions de base sur le routage et la commutation', duration: 'Durée : 05Jours' },
    { id: 3, title: 'CISCO3', description: 'CCNA 2 : Notions de base sur le routage et la commutation', duration: 'Durée : 05Jours' },
    { id: 4, title: 'CISCO4', description: 'CCNA 2 : Notions de base sur le routage et la commutation', duration: 'Durée : 05Jours' },
    { id: 5, title: 'CISCO5', description: 'CCNA 2 : Notions de base sur le routage et la commutation', duration: 'Durée : 05Jours' },
    { id: 6, title: 'CISCO6', description: 'CCNA 2 : Notions de base sur le routage et la commutation', duration: 'Durée : 05Jours' },
    { id: 7, title: 'CISCO7', description: 'CCNA 2 : Notions de base sur le routage et la commutation', duration: 'Durée : 05Jours' },
    
  ];

  const renderItems = () => {
    const endIndex = startIndex + itemsPerPage;
    const slicedData = data.slice(startIndex, endIndex);
    return slicedData.map(item => (
      <div key={item.id} className='catalogue_Item'>
        <h2 className='catalogue_title'>{item.title}</h2>
        <div className='catalogue_dsc'>
          <p>{item.description}</p>
        </div>
        <span className='catalogue_duration'>{item.duration}</span>
        <a className='catalogue_link' href="#">Details </a>
      </div>
    ));
  };

  const handleLeftClick = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  const handleRightClick = () => {
    if (startIndex + itemsPerPage < data.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  return (
    <div className='catalogue'>
      <button className='btn' onClick={handleLeftClick}> <ChevronLeftIcon  sx={{ fontSize: "50px"}}/></button>
      <div className='cata_div'>
        {renderItems()}
      </div>
      <button className='btn' onClick={handleRightClick}> <KeyboardArrowRightIcon sx={{ fontSize: "50px"}}/></button>
    </div>
  );
}

export default Landing;

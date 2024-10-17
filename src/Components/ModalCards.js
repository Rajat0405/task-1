import React from 'react';

const ModalCards = ({ cards=[] }) => {
  return (
    <div className="modal">
      {cards.map((card) => (
        <div className="cards" key={card.id}>
          <img 
            src={card.logo} 
            alt={`${card.title} logo`} 
            className="card-logo"
          />
          <h2>{card.title}</h2>
          <p>{card.content}</p>
        </div>
      ))}
    </div>
  );
};

export default ModalCards;

import React from 'react';
import '../style.css';

export const PopUpModal = ({ onClose, modalContent }) => {
  return (
    <div className={`modal-overlay ${true ? 'blur' : ''}`}> 
      <div className="modal-content">
        <h2>{modalContent.title}</h2>
        <button onClick={onClose} className="close-button">Close</button>
      </div>
    </div>
  );
};

import React from 'react';
import './Pagination.css';

const Pagination = () => {
  // Tableau des numéros de liens
  const links = [1, 2, 3]; 

  return (
    <div className="pagination-container">
      <div className="pagination-links">
        {links.map((link) => (
          <a 
            href="#" 
            key={link} 
            className={`pagination-link ${link === 1 ? 'active' : ''}`}
          >
            {link}
          </a>
        ))}
      </div>
      <button className="pagination-next">
        Next →
      </button>
    </div>
  );
};

export default Pagination;

import React from 'react';

function ListingCard({ listing }) {
  return (
    <div>
      {/* Contenu de la carte d'annonce */}
      <h2>{listing.title}</h2>
      <p>{listing.description}</p>
    </div>
  );
}

export default ListingCard;

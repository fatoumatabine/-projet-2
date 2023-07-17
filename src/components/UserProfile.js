import React from 'react';

function UserProfile({ user }) {
  return (
    <div>
      {/* Contenu du profil utilisateur */}
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserProfile;

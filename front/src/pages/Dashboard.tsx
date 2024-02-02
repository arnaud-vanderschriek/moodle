import React from 'react';

const Dashboard = ({ children }: any) => {
  return (
    <div>
      <h2>Dashboard</h2>
      {/* Vous pouvez ajouter des éléments communs à tous les tableaux de bord ici */}
      <hr />
      {children}
    </div>
  );
};

export default Dashboard;
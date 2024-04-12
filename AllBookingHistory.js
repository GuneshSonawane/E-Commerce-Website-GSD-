import React from 'react';

const AllBookingHistory = (props) => {
  const { userAlllbooking } = props;

  if (!userAlllbooking ) {
    return <div>No car photo available</div>;
  }

  return (
    <div>
      <h2>{userAlllbooking.carname}</h2>
      <p>{userAlllbooking}</p>
    </div>
  );
};

export default AllBookingHistory;

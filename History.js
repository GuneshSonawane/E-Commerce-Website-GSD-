import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/noteContext";
import "../History.css";

const History = () => {
  const context = useContext(noteContext);
  const { bookings, getallbookings } = context;

  // Get the logged-in user's ID from the token or wherever it is stored
  const loggedInUserId = localStorage.getItem("id");
  console.log(loggedInUserId);

  useEffect(() => {
    getallbookings(loggedInUserId); // Call getbookings with the logged-in user's ID
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array to run only once when the component mounts

  return (
    <>
      <h1 className="my-3"><center>My Bookings</center></h1>
      {bookings.length === 0 ? (
        <p>No bookings to display</p>
      ) : (
        bookings.map((booking) => {
          const startDate = new Date(booking.startDate);
          const endDate = new Date(booking.endDate);
          const differenceInTime = endDate.getTime() - startDate.getTime();
          const differenceInDays = differenceInTime / (1000 * 3600 * 24);

          return (
            <div className="history-container" key={booking._id}>
              <div className="left-sideview">
                <div className="car-info1">
                  <b>{booking.carname}</b>
                </div>
                <div className="car-info1">
                  Car Cost: <b>{booking.carcost}/perday</b>
                </div>
                <div className="car-info1">
                  Total Cost: <b>{differenceInDays * booking.carcost}</b>
                </div>
              </div>
              <div className="middle-sideview">
                <div className="booking-info">
                  From: <b>{booking.startDate}</b>
                </div>
                <div className="booking-info">
                  To: <b>{booking.endDate}</b>
                </div>
                <div className="booking-info">
                  Date of booking: <b>{new Date(booking.date).toLocaleDateString()}</b>
                </div>
              </div>
              <div className="right-sideview">
                <img
                  className="history-image"
                  src={booking.carphoto}
                  alt="car-photo"
                />
              </div>
            </div>
          );
        })
      )}
    </>
  );
};

export default History;

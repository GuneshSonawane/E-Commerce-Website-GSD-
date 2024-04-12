import React, { useContext, useState , useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import noteContext from '../context/notes/noteContext';
import '../Bookingcar.css'; 

const BookingCar = (props) => {
  const location = useLocation();
  const { carid, carname, cardescription, carcost, carphoto } = location.state || {};
  const context = useContext(noteContext);
  const { bookings, getallbookings , getbookings } = context;

  useEffect(() => {
    getallbookings(); 
  }, []); 

  const [mobileNumber, setMobileNumber] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [bookingSuccessful, setBookingSuccessful] = useState(false);

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleStartDateChange = (e) => {
    const startDateValue = e.target.value;
    setStartDate(startDateValue);
  };

  const handleEndDateChange = (e) => {
    const endDateValue = e.target.value;
    setEndDate(endDateValue);
  };

  const calculateDateDifference = () => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const differenceInTime = end.getTime() - start.getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    return differenceInDays+1;
  };

  const defbtwtrip = calculateDateDifference();
  const tripcost = parseInt(carcost);
  const totalcostoftrip = defbtwtrip * tripcost;

  

  const [booking, setBooking] = useState({
    bookeduser: localStorage.getItem('id'),
    car_id: carid,
    mobileNumber: '',
    startDate: '',
    endDate: '',
    carname: carname,
    carcost: carcost,
    carphoto: carphoto,
  });

  const handleClick = (e) => {
    e.preventDefault();
  
    // Check if the car is already booked for the selected dates
    const isCarBooked = bookings.some((booking) => {
      const bookingStartDate = new Date(booking.startDate);
      const bookingEndDate = new Date(booking.endDate);
      const selectedStartDate = new Date(startDate);
      const selectedEndDate = new Date(endDate);
  
      // Check if the selected dates overlap with any existing booking
      return (
        booking.car_id === carid &&
        (
          // (selectedStartDate >= bookingStartDate && selectedStartDate <= bookingEndDate) ||
          // (selectedEndDate >= bookingStartDate && selectedEndDate <= bookingEndDate) ||
          // (selectedStartDate <= bookingStartDate && selectedEndDate >= bookingStartDate)
          ((Math.max(bookingStartDate, selectedStartDate)) < Math.min(bookingEndDate,selectedEndDate))
        )
      );
      
    });
  
    if (isCarBooked) {
      alert('This car is already booked for the selected dates. Please choose different dates.');
    } else {
      // Proceed with the booking
      getbookings(
        booking.bookeduser,
        booking.car_id,
        mobileNumber,
        startDate,
        endDate,
        booking.carname,
        booking.carcost,
        booking.carphoto
      );
      console.log('Booking Successful');
      setBooking({
        bookeduser: localStorage.getItem('id'),
        car_id: carid,
        mobileNumber: mobileNumber,
        startDate: startDate,
        endDate: endDate,
        carname: carname,
        carcost: carcost,
        carphoto: carphoto,
      });
      setBookingSuccessful(true); 
    }
  };
  
  

  return (
    
    // <>
    //  <div className="my-container">
    //    <div className="left-side">
    //     <img className='left-side-image'
    //       src={carphoto}
    //       alt="photo"
    //     />
    //   </div>
    //   <div className="right-side">
    //     <div className="car-info">
    //       <div className="heading" style={{marginRight: "50px"}}><center>Car Information</center></div>
    //       <p>{carname}</p>
          
    //       <p>{carcost}/per day</p>
    //     </div>
    //     <hr />
    //     <div className="Booking-Detail">
    //       <div className="heading"><center>Booking Details</center></div>
    //       <div className="usernmber">
    //       <label htmlFor="mobileNumber">Mobile Number:</label>
    //       <input
    //         type="text"
    //         id="mobileNumber"
    //         name="mobileNumber"
    //         value={mobileNumber}
    //         onChange={handleMobileNumberChange}
    //         required
    //       />
    //       </div>

    //       <div className="startdate">
    //       <label htmlFor="startDate">Start Date:</label>
    //       <input
    //         type="date"
    //         id="startDate"
    //         name="startDate"
    //          value={startDate}
    //          onChange={handleStartDateChange}
    //         required
    //       />
    //       </div>
    //       <div className="enddate">
    //       <label htmlFor="endDate">End Date:</label>
    //       <input
    //         type="date"
    //         id="endDate"
    //         name="endDate"
    //          value={endDate}
    //          onChange={handleEndDateChange}
    //         required
    //       />
    //       </div>
    //       <div className="totalcost">
    //         Total Cost: {defbtwtrip * tripcost}
    //       </div>

    //       <div className="submit-container">
    //         <button type="submit" className="submit-button" onClick={handleClick}>
    //           Submit
    //         </button>
    //       </div>
    //       {bookingSuccessful && <div className="alert alert-success my-3" role="alert">Booking Successful!</div>}
    //     </div>
    //   </div>
    // </div>
    <>
    <div className="bookusercar">
  <div class="card" style={{"width": "25rem" , marginBottom:"40px"}}>
  <img src={carphoto} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">{carname}</h5>
    <p class="card-text">{cardescription}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">₹{carcost} /day</li>
  </ul>
  
</div>
<div className="card" style={{width : "45rem" , padding :"35px" , marginLeft: "20px"}}>


<form onSubmit={handleClick}>
  <div class="mb-3">
  <label class="form-label" htmlFor="mobileNumber">Mobile Number:</label>
          <input
            type="text"
            id="mobileNumber"
            class="form-control"
            name="mobileNumber"
            value={mobileNumber}
            onChange={handleMobileNumberChange}
            required
          />
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
  <label htmlFor="startDate" class="form-label">Start Date:</label>
          <input
            type="date"
            id="startDate"
            class="form-control"
            name="startDate"
             value={startDate}
             onChange={handleStartDateChange}
            required
          />
  </div>

  <div class="mb-3">
  <label htmlFor="endDate" class="form-label">End Date:</label>
          <input
            type="date"
            id="endDate"
            class="form-control"
            name="endDate"
             value={endDate}
             onChange={handleEndDateChange}
            required
          />
  </div>
  <div className="totalcost">
    Total Cost: {defbtwtrip * tripcost}
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
  {bookingSuccessful && <div className="alert alert-success my-3" role="alert">Booking Successful!</div>}
</form>
</div>
</div>
    </>
   );
};


export default BookingCar;





import React  from "react";

import "../Home.css";

import "../App.css";

const Home = (props) => {
  
  
  
  return (
    <>
    <div className="container" style={{ padding: 0, margin: 0 }}>
     
      <main>

  <div id="myCarousel" className="carousel slide" data-bs-ride="carousel" >
    <div className="carousel-indicators" >
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner" >
      <div className="carousel-item active" style={{ width: '100%', height: '450px' }}>
      <img src="https://images.hindustantimes.com/auto/img/2023/02/13/1600x900/Audi_Q3_Sportback_1676267911131_1676267924806_1676267924806.jpg" className="bd-placeholder-img" alt="Slide 1"  style={{ margin: '0px' }}/>


        <div className="container-fluid" style={{ padding: 0, margin: 0 }} >
          <div className="carousel-caption text-start">
            <h1>Welcome AutoRentals.</h1>
            <p>Book your ride and conform your tour</p>
            <p><a className="btn btn-lg bg-light" href="/signup">Sign up today</a></p>
          </div>
        </div>
      </div>
      <div className="carousel-item">
      <img src="https://di-uploads-pod7.dealerinspire.com/mercedesbenztorontoregionalgroup/uploads/2019/04/CLAcoupeSmallPlate.jpg" alt="Slide 1"  style={{ margin: '0px' }}/>

        <div className="container-fluid">
          <div className="carousel-caption">
            <h1>Ride With Safety Assurance</h1>
            <p>Complete Your Journey With Safety Assurance</p>
            <p><a className="btn btn-lg bg-light" href="#">Learn more</a></p>
          </div>
        </div>
      </div>
      <div className="carousel-item">
      <img src="https://cfx-wp-images.imgix.net/2020/09/2021-Mercedes-Benz-S-Class-lead-scaled.jpg?auto=compress%2Cformat&ixlib=php-3.3.0&s=b4a90631cf7e2ccc5cfb7b292f618782" alt="Slide 1"  style={{ margin: '0px' }}/>

        <div className="container-fluid">
          <div className="carousel-caption text-end">
            <h1>Browse Vechiles For Journey</h1>
            <p>Browse Different Vechiles For Your Tour</p>
            <p><a className="btn btn-lg bg-light" href="/SeeCar">Browse gallery</a></p>
          </div>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>


  

  <div className="container marketing">

    
    <div className="row">
      <div className="col-lg-4">
      <img src="https://wallpapercave.com/wp/wp2002313.jpg" className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false" alt="Placeholder" />


        <h2>Book Car</h2>
        <p>Book your dream car and experience the thrill of the open road. Explore our wide selection of vehicles and choose the perfect one for your journey</p>

        <p><a className="btn" href="#" style={{backgroundColor:" #f5d547"}}>View details &raquo;</a></p>
      </div>
      <div className="col-lg-4">
      <img src="https://images.carandbike.com/bike-images/large/bajaj/pulsar-220/bajaj-pulsar-220.jpg?v=32" className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false" alt="Placeholder" />

        <h2>Book Bike</h2>
        <p>Embark on an exhilarating biking experience and explore the world on two wheels. Discover our diverse range of bikes, for adventure trails</p>

        <p><a className="btn" href="#" style={{backgroundColor:" #f5d547"}}>View details &raquo;</a></p>
      </div>
      <div className="col-lg-4">
      <img src="https://www.usnews.com/object/image/00000182-a530-dc41-a1db-a57f00ef0000/01_2022_Chevrolet_Suburban_.jpg?update-time=&size=responsive640" className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false" alt="Placeholder" />

        <h2>Book SUV</h2>
        <p>Experience the ultimate comfort and versatility with our premium SUVs. Whether you're planning a family road trip or seeking a spacious and luxurious ride.</p>

        <p><a className="btn" href="#" style={{backgroundColor:" #f5d547"}}>View details &raquo;</a></p>
      </div>
    </div>


    

    <hr className="featurette-divider" />

    <div className="row featurette">
      <div className="col-md-7">
        <h2 className="featurette-heading">Wide Selection Of Vechiles. <span className="text-muted">Online Bookings.</span></h2>
        <p className="lead">Discover a vast range of vehicles to suit your every need. Experience hassle-free and convenient online bookings through our user-friendly platform.</p>
      </div>
      <div className="col-md-5">
      <img src="https://www.topgear.com/sites/default/files/images/news-article/2018/06/1f810622b783ed8dfac540d727b654b3/p90306611_highres.jpg" class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false" alt="Placeholder" style={{borderRadius:"20px"}}/>


      </div>
    </div>

    <hr className="featurette-divider" />

    <div className="row featurette">
      <div className="col-md-7 order-md-2">
        <h2 className="featurette-heading">24 X 7 Customor Support.</h2>
        <p className="lead">We understand the importance of providing exceptional customer service whenever you need it.That's why our dedicated support team is available around the clock, 24 hours a day, 7 days a week.</p>
      </div>
      <div className="col-md-5 order-md-1">
      <img src="https://e7.pngegg.com/pngimages/179/27/png-clipart-24-7-service-illustration-24-7-service-handyman-los-angeles-customer-service-twenty-four-company-text.png" class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false" alt="Placeholder" style={{borderRadius:"20px"}}/>

      </div>
    </div>

    <hr className="featurette-divider" />

    <div className="row featurette">
      <div className="col-md-7">
        <h2 className="featurette-heading">Flexible Rental Periods With Transpert Pricing.</h2>
        <p>Enjoy the freedom to choose the rental period that suits your schedule. Whether you need a car for a few hours, a day, a week, or even longer, our flexible rental options allow you to tailor the duration to your specific needs.</p>
      </div>
      <div className="col-md-5">
      <img src="https://images.assettype.com/fortuneindia%2F2021-01%2Fd14fb40c-4739-4da8-96d7-4efd332715d5%2FAUDI_S5.jpg?w=1250&q=60" class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false" alt="Placeholder" style={{borderRadius:"20px"}}/>

      </div>
    </div>

    <hr className="featurette-divider" />

    

  </div>


  
  <footer className="container">
    <p className="float-end"><a href="#">Back to top</a></p>
    <p>&copy; 2017–2021 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
  </footer>
</main>

<style>
{`
        .bd-placeholder-img {
          font-size: 1.125rem;
          text-anchor: middle;
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
          
        }

        @media (min-width: 768px) {
          .bd-placeholder-img-lg {
            font-size: 3.5rem;
            
          }
        }
      `}
  </style>

  </div>

    </>
  );
};

export default Home;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Signup.css'

export default function Signup(props) {
  const [credentials, setCredentials] = useState({ name: '', email: '', password: '', cpassword: '' });
  let history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    const response = await fetch('http://localhost:5000/api/auth/createuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // save the auth-token and redirect
      localStorage.setItem('token', json.authToken);
      history('/login');
      props.showAlert('Account Created Successfully', 'success');
    } else {
      props.showAlert('Invalid Credentials', 'danger');
    }
  };

  const onChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  
  
  
  return (
    <div id="signupimg" className="container1">
      <h1 style={{ textAlign: 'center',  color: 'black' }}>Book Your Ride Now !</h1>
      <div className="row my-5">
        <div className="col-6 my-4">
          <h3 className='creatingtext' style={{ textAlign: 'center' }}>Create An Account</h3>
          <div id='signupcard' className="card mx-7" >
            <div className="card-body mx-2">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    User Name
                  </label>
                  <input type="text" className="form-control" id="name" name="name" onChange={onChange} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input type="email" className="form-control" id="email" name="email" onChange={onChange} aria-describedby="emailHelp" />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input type="password" className="form-control" name="password" onChange={onChange} minLength={5} required id="password" />
                </div>
                <div className="mb-3">
                  <label htmlFor="cpassword" className="form-label">
                    Confirm Password
                  </label>
                  <input type="password" className="form-control" name="cpassword" onChange={onChange} minLength={5} required id="cpassword" />
                </div>

                <button type="submit" className="btn btn-outline-success my-3">
                  Create
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

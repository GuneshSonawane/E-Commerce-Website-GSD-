import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import noteContext from "../context/notes/noteContext";
import '../App.css'

const Addcar = () => {
  const context = useContext(noteContext);
  const { addNote } = context;
  const navigate = useNavigate(); 

  const [note, setNote] = useState({ name: '', description: '', cost: '', photo: '' });

  const handleClick = async (e) => {
    e.preventDefault();
    await addNote(note.name, note.description, note.cost, note.photo);
    console.log("Sucesfully Added Data In Database")
    setNote({ name: '', description: '', cost: '', photo: '' });
    navigate('/home'); 
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
    return (
        <div className="container my-5" id='Addingcar'>
  <div className="row" style={{margin: 100}}>
    <div className="col-md-6">
      <h2 className='addar-text' style={{width:"max-content"}}> Add a Car On Rent</h2>
      <form className="my-3">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Car Name</label>
          <input type="text" className="form-control" id="name" name="name" aria-describedby="emailHelp" value={note.name} onChange={onChange} minLength={3} required />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Car Description</label>
          <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={onChange} minLength={5} required />
        </div>
        <div className="mb-3">
          <label htmlFor="cost" className="form-label">Cost Per Day</label>
          <input type="text" className="form-control" id="cost" name="cost" value={note.cost} onChange={onChange} required />
        </div>
        <div className="mb-3">
            <label htmlFor="photo" className="form-label">Enter Image Url</label>
            <input type="text" className="form-control" id="photo" name="photo" value={note.photo} onChange={onChange} required />
        </div>
        <button disabled={note.name.length < 3 || note.description.length < 5} type="submit" className="btn" style={{backgroundColor:" #f5d547"}} onClick={handleClick}>Add Car</button>
      </form>
    </div>
    <div className="col-md-6" style={{margin: 'auto' , mixBlendMode:"darken"}}>
      <img src='https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Hyundai-Grand-i10-Nios-200120231541.jpg&w=872&h=578&q=75&c=1' alt="Car" className="img-fluid" />
    </div>
  </div>
</div>

    )
}

export default Addcar




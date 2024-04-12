import React, { useState, useContext } from "react";
import noteContext from "../context/notes/noteContext";

const CarCard = ({ car }) => {
  const context = useContext(noteContext);
  const { editNote, deleteNote } = context;

  const [editing, setEditing] = useState(false);
  const [updatedCar, setUpdatedCar] = useState({
    _id: car._id,
    name: car.name,
    description: car.description,
    cost: car.cost,
    photo: car.photo
  });
  

  const handleUpdate = () => {
    editNote(
      car._id, 
      updatedCar.name,
      updatedCar.description,
      updatedCar.cost,
      updatedCar.photo
    );
    setEditing(false);
  };
  

  const handleDelete = () => {
    deleteNote(car._id);
  };
  

  const handleChange = (e) => {
    setUpdatedCar({
      ...updatedCar,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="col-md-4 my-3">
      <div className="card">
        <img src={car.photo} className="card-img-top" alt="Car" />
        <div className="card-body">
          {editing ? (
            <>
              <input
                type="text"
                name="name"
                value={updatedCar.name}
                onChange={handleChange}
              />
              <input
                type="text"
                name="description"
                value={updatedCar.description}
                onChange={handleChange}
              />
              <input
                type="number"
                name="cost"
                value={updatedCar.cost}
                onChange={handleChange}
              />
              <input
                type="text"
                name="photo"
                value={updatedCar.photo}
                onChange={handleChange}
              />
            </>
          ) : (
            <>
              <h5 className="card-title">{car.name}</h5>
              <p className="card-text">{car.description}</p>
              <p className="card-text">Cost: {car.cost}</p>
            </>
          )}
          <div className="card-buttons">
            {editing ? (
              <>
                <button className="btn btn-primary" onClick={handleUpdate}>
                  Save
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => setEditing(false)}
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <button
                  className="btn btn-primary"
                  onClick={() => setEditing(true)}
                >
                  Update
                </button>
                <button className="btn btn-danger" onClick={handleDelete}>
                  Delete
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;

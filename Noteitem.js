import React from "react";
import noteContext from "../context/notes/noteContext";
import { useContext } from 'react';
import { useState } from "react";
import { useEffect } from "react";
import { Button } from 'antd';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../Noteitem.css";

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;

  // console.log(localStorage.getItem('token'));
  const carid = note._id;
  const carname = note.name;
  const cardescription = note.description;
  const carcost = note.cost;
  const carphoto = note.photo;
  console.log(carid)
  let navigate = useNavigate();

  const handleBookNow = () => {
    navigate(`/booking/${note._id}`,{state:{carid:carid , carname:carname , cardescription:cardescription,carcost:carcost,carphoto:carphoto}});
  };


  console.log(localStorage.getItem('id'));
  console.log(note.user);
  


  return (
    <div className="col-md-3 mx-2">
  <div className="card my-3 shadow p-3 mb-5 bg-white rounded">
    <img src={note.photo} className="card-img-top" alt="Car" />
    <div className="card-body d-flex flex-column">
      <h5 className="card-title">{note.name}</h5>
      <div className="row">
        <div className="col">
          <p className="card-text">{note.description}</p>
        </div>
        <div className="col text-end">
          <p className="card-text">{note.cost}/per day</p>
        </div>
      </div>
      <div>
        {localStorage.getItem('id') === note.user && (
          <div className="d-flex align-items-center">
            <button className="btn btn-danger my-3" onClick={() => { deleteNote(note._id) }}>
              Delete
            </button>
            <button className="btn btn-primary mx-2 my-3" onClick={() => { updateNote(note) }}>
              Update
            </button>
          </div>
        )}
        {localStorage.getItem('id') !== note.user && (
        <div className="my-2">
           <button className="btn" onClick={handleBookNow} style={{backgroundColor : "#f5d547"}}>Book Now</button>
        </div>)}
      </div>
    </div>
  </div>
</div>

  );
};

export default Noteitem;
import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";

import { useNavigate } from 'react-router-dom';

const Notes = () => {
  
  const context = useContext(noteContext);
  
  let history = useNavigate();
    const { notes, getNotes, editNote } = context;
    useEffect(() => {
        
          getNotes()
        
        
        // eslint-disable-next-line
    }, [])
    const ref = useRef(null)
    const refClose = useRef(null)
    const [note, setNote] = useState({id: "", ename: "", edescription: "", ecost: "" , ephoto: ""})

    const updateNote = (currentNote) => {
      
        ref.current.click();
        setNote({id: currentNote._id, ename: currentNote.name, edescription: currentNote.description, ecost:currentNote.cost , ephoto: currentNote.photo})
      
    }

    const handleClick = (e)=>{ 
        
           editNote(note.id, note.ename, note.edescription, note.ecost , note.ephoto)
           refClose.current.click();
        
    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }

    


 

  return (
    <>
      
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="ename"
                    name="ename"
                    value={note.ename}
                    aria-describedby="emailHelp"
                    onChange={onChange}
                    minLength={3}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="edescription"
                    name="edescription"
                    value={note.edescription}
                    onChange={onChange}
                    minLength={5}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="cost" className="form-label">
                    Cost
                  </label>
                  <input
                    type="cost"
                    className="form-control"
                    id="ecost"
                    name="ecost"
                    value={note.ecost}
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="photo" className="form-label">
                    Photo
                  </label>
                  <input
                    type="photo"
                    className="form-control"
                    id="ephoto"
                    name="ephoto"
                    value={note.ephoto}
                    onChange={onChange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                ref={refClose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                disabled={
                  note.ename.length < 3 || note.edescription.length < 5 
                }
                onClick={handleClick}
                type="button"
                className="btn btn-primary"
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <h2>You Notes</h2>
        <div className="container mx-2">
          {notes.length === 0 && "No notes to display"}
        </div>
        {notes.map((note) => {
          return (
            <Noteitem key={note._id} updateNote={updateNote} note={note} />
          );
        })}
      </div>
    </>
  );
  
};

export default Notes;
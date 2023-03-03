import React, { useState, useEffect } from "react";
import { useNavigate , useLocation, useParams } from "react-router-dom";
import axios from "axios";
import './AddEdit.css';
import {toast} from 'react-toastify';


const initalState = {
  Name: "",
  Email: "",
  contact: "",
};

const AddEdit = () => {
  const [state, setState] = useState(initalState);
  const { Name, Email, contact } = state;

  const navigate  = useNavigate ();
  const {id} = useParams();

  useEffect(() => {
    if(id)
    {
      getSingleUser(id);
    }
  },[id])

  const getSingleUser = async (id) => {
    const response = await axios.get(`http://localhost:5000/user/${id}`)
       if(response.status === 200)
       {
         setState({...response.data[0]});
       }

  }

  const addContact = async (data) => {
    const response = await axios.post("http://localhost:5000/user",data);
    if(response.status === 200){
      toast.success(response.data);
    }
  }

  const updateContact = async (data, id) => {
    const response = await axios.put(`http://localhost:5000/user/${id}`, data);
    if(response.status === 200){
      console.log("dkfjb",response.data);
      toast.success(response.data);
    }
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(!Name || !Email || !contact)
    {
      toast.error("please enter a required values");
    }
    else {
      if(!id){
        addContact(state);
      }
      else{
        updateContact(state, id);
      }
      
      setTimeout(()=>{
        navigate("/");
      },500)
      
    }
    
  }
  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({...state, [name]: value });
  };
  return (
    <div style={{ marginTop: "100px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit = {handleSubmit}
      >
        <label htmlFor="Name">Name</label>
        <input
          type="text"
          id="Name"
          name="Name"
          placeholder="EnterName..."
          onChange={handleInputChange}
          value={Name}
        />
        <label htmlFor="Email">Email</label>
        <input
          type="email"
          id="Email"
          name="Email"
          placeholder="Enteremail..."
          onChange={handleInputChange}
          value={Email}
        />
        <label htmlFor="contact">Contact</label>
        <input
          type="number"
          id="contact"
          name="contact"
          placeholder="Entercontact..."
          onChange={handleInputChange}
          value={contact}
        />
        <input type="submit" value={ id ? "Update" : "Add"} />
      </form>
    </div>
  );
};

export default AddEdit;

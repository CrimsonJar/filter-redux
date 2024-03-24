import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addService,
  updateService,
  setSearchTerm,
} from "../redux/actionCreators";
import { ADD_SERVICE, REMOVE_SERVICE } from "../redux/actionTypes";

const ServiceAdd = () => {
  const editingService = useSelector((state) => state.serviceList.editing);
  const isEditing = Boolean(editingService);

  useEffect(() => {
    if (isEditing) {
      setItem({ name: editingService.name, price: editingService.price });
    }
  }, [isEditing, editingService]);
  const [item, setItem] = useState({ name: "", price: "" });

  const dispatch = useDispatch();

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
    if (name === "name") {
      dispatch(setSearchTerm(value));
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (isEditing) {
      dispatch(updateService(editingService.id, item.name, item.price));
    } else {
      dispatch(addService(item.name, item.price));
    }
    setItem({ name: "", price: "" });
  };
  const handleCancel = () => {
    setItem({ name: "", price: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name='name' onChange={handleChange} value={item.name} />
      <input name='price' onChange={handleChange} value={item.price} />
      <button type='submit'>Save</button>
      <button type='button' onClick={handleCancel}>
        Cancel
      </button>
    </form>
  );
};

export default ServiceAdd;

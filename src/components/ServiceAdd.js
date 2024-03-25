import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addService,
  updateService,
  setSearchTerm,
} from "../redux/actionCreators";
import "./CSS/ServiceAdd.css";
import { ADD_SERVICE, REMOVE_SERVICE } from "../redux/actionTypes";

const ServiceAdd = () => {
  const editingService = useSelector((state) => state.serviceList.editing);
  const isEditing = Boolean(editingService);
  const [searchActive, setSearchActive] = useState(false);
  const [item, setItem] = useState({ name: "", price: "" });
  useEffect(() => {
    if (isEditing) {
      setItem({ name: editingService.name, price: editingService.price });
    }
  }, [isEditing, editingService]);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
    if (name === "name") {
      if (searchActive) {
        dispatch(setSearchTerm(value));
      }
    }
  };

  const dispatch = useDispatch();

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
  const toggleSearch = () => {
    const newSearchActive = !searchActive;
    setSearchActive(newSearchActive);
    if (newSearchActive) {
      // кнопка включена - выполняем поиск с текущим значением name
      dispatch(setSearchTerm(item.name));
    } else {
      // кнопка отключена - выводим весь список (очищаем условие поиска)
      dispatch(setSearchTerm(""));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <button
        type='button'
        onClick={toggleSearch}
        className={searchActive ? "active" : ""}
      >
        Search
        {/* {searchActive ? "Search off" : "Search on"} */}
      </button>
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

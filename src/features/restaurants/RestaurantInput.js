import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { restaurantAdded } from "./restaurantsSlice";

function RestaurantInput() {

  const [name, setName] = useState('')
  const dispatch = useDispatch()

  function handleChange(e) {
    setName(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(restaurantAdded(name))
    setName('')
  }

  return (
    <>
    <div>Resturant input</div>
    <form onSubmit={handleSubmit}>
      <input type='text' name='name' value={name} onChange={handleChange}/>
      {/* <input type='submit' name='submit'>Add Restaurant</input> */}
      <button type='submit' name='submit'>Add Restaurant</button>
    </form>
    </>
  );
}

export default RestaurantInput;

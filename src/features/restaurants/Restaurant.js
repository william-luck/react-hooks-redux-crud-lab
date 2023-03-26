import React from "react";
import ReviewsContainer from "../reviews/ReviewsContainer";
import { useDispatch } from "react-redux";
import { restuarantRemoved } from "./restaurantsSlice";

function Restaurant({ restaurant }) {

  const dispatch = useDispatch()

  function handleDelete() {
    dispatch(restuarantRemoved(restaurant.id))
  }

  return (
    <div>
      <li>
        {restaurant.name}
        <button onClick={handleDelete}> Delete Restaurant </button>
        <ReviewsContainer restaurant={restaurant} />
      </li>
    </div>
  );
}

export default Restaurant;

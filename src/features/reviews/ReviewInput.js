import React from "react";
import Reviews from "./Reviews";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { reviewAdded } from "./reviewsSlice";

function ReviewInput({ restaurant }) {
  const [content, setContent] = useState('')
  const dispatch = useDispatch()

  function handleChange(e) {
    setContent(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(reviewAdded({
      comment: content, 
      restaurantId: restaurant.id
    }))
    setContent('')
  }

  return (
    <>
    <div>Reviews input</div>
    <form onSubmit={handleSubmit}>
      <input type='text' name='name' value={content} onChange={handleChange}/>
      <button type='submit' name='submit'>Add Review</button>
    </form>
    </>
  );
}

export default ReviewInput;

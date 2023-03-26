import React from "react";
import Review from "./Review";
import { useSelector } from "react-redux";

function Reviews( { restaurant }) {

  const reviews = useSelector(state => {
    return state.reviews.entities.filter(review => review.restaurantId === restaurant.id)
  })

  return (
    <>
    <ul>Reviews
      {reviews?.map(review => <Review review={review} key={review.id}/>)}
    </ul>

    </>
  )
}

export default Reviews;

import React from "react";
import Restaurant from "./Restaurant";

function Restaurants( { restaurants }) {
  return (
    <>
    <ul>
      Restaurants Component
      {restaurants?.map(rest => <Restaurant restaurant={rest} key={rest.id}/>)}
    </ul>

    </>
  )
}

export default Restaurants;

import React from "react";

function Location() {
  let vacationSpots = [
    {
      place: "Meridian, Idaho",
      price: 40,
      timeToGo: "Spring",
    },
    {
      place: "Cancun",
      price: 900,
      timeToGo: "Winter",
    },
    {
      place: "China",
      price: 1200,
      timeToGo: "Fall",
    },
    {
      place: "Russia",
      price: 1100,
      timeToGo: "Summer",
    },
    {
      place: "Lebanon",
      price: 400,
      timeToGo: "Spring",
    },
  ];

  let vac = vacationSpots.map(function (props) {
    let place = props.place;
    let price = props.price;
    let primeTime = props.timeToGo;
    return (
      <div>
        <h1>{place}</h1>
        <span>
          <p>{price}</p>
          <p>{primeTime}</p>
        </span>
      </div>
    );
  });
  return(
      <div>{vac}</div>
  )
}
export default Location;

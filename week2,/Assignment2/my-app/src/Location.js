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
      <div style={{backgroundColor:"lightgrey"}}>
        <h1 style={{color:"blue", backgroundColor:"grey"}}>{place}</h1>
        <span>
          <p style={{color:"black"}}>
            <b style={{color:"Green"}}>Price:</b> {price}
          </p>
          <p style={{color:"Blue"}}>
            <b style={{color:"Red"}}>Time to go:</b> {primeTime}
          </p>
        </span>
      </div>
    );
  });
  
  return(
      <div>{vac}</div>
  )
}
export default Location;
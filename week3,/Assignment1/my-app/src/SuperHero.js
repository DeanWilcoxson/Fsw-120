import React from "react";
import Data from "./Data";

function Superhero (){
    let charachters = Data.map(function(props){
    return(
        <div key={props.id}>
            <button onClick={()=>{alert(props.catchPhrase)}}>
                <h1>{props.name}</h1>
                <img style={{width:"200px"}}src={props.imageName} alt={"description"}/>
            </button>
        </div>
    )})

    return(
        <div>{charachters}</div>
    )
}
export default Superhero;
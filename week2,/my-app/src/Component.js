import React from "react";

function Component(props){
    let title = props.title;
    let subTitle = props.subTitle;
    let information = props.information;
    
    return (
        <h1 style={{backgroundColor: props.backgroundColor}}>{title}{subTitle}{information}</h1>
    )
}
export default Component;
import React from "react";

function Component(props){
    let title = props.title;
    let backgroundColor = props.backgroundColor;
    let subTitle = props.subTitle;
    let information = props.information;
    return (
        <h1>{title}{backgroundColor}{subTitle}{information}</h1>
    )
}
export default Component;
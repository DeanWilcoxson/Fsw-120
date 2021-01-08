import React from "react";
import Die from "./Die"
class DiceBox extends React.Component{
    constructor(){
        super()
        this.state = {
            count: 0,
            diceNum: 0
        };
    }


    render(){
        return(
            <div>
                <Die />
                <button />
            </div>
        )    
}
}
export default DiceBox;
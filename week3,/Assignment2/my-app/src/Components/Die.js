import React from "react";
class Die extends React.Component{
    constructor(){
        super()
        this.state = {
            num: 0,
            counter: 0,
            isChecked: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        if(this.state.counter < 3){
            return this.setState((prevState) => ({
                num: Math.floor(Math.random()*6 +1),
                counter: prevState.counter + 1
            }));
        } else if(this.state.counter >= 3){
            return this.setState({
                num:0,
                counter: 0
            })
        }
    }
    holdNumber(){
        return this.setState((prevState) => ({
            isChecked: prevState.isChecked = true
        }))
    }
    render(){
        let styles = {
            textAlign:"center",
            fontSize:"50px"
        }
        return(
            <div>
                <h1 style={styles}>{this.state.num}</h1>
                <button onClick={this.handleClick}>Roll</button>
            </div>
        )
    }
}
export default Die;
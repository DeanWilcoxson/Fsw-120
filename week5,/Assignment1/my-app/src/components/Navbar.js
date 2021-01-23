import React from 'react'
import { Link } from 'react-router-dom'


function Navbar(){
    let styles = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly"
    }
    return(
        <div style={styles}>
            <Link to="/">Home</Link>
            <Link to="/Services">Services</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/About">About</Link> 
        </div>
    )
}
export default Navbar;
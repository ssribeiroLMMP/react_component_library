// # Main Import
import React from 'react';
import { Link } from "react-router-dom";

// # Import Component Style
import './GridActionIcon.css'

// Navbar React Component Construction
function GridActionIcon (props) {
    
    return (
        <Link to={props.routeURL}>
            <button className={"action-icon"} 
                    style={{backgroundColor: props.backgroundColor, color: props.color}}
                    tooltip={props.tooltip}>
                <i  className={props.icon}></i>
            </button>
        </Link>
        
    )

}

export default GridActionIcon;

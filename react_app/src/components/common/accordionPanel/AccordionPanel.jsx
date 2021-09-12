// # Main Import 
import React, { useState } from 'react';

// # Import Component Style
// import './AccordionPanel.css'

// # Logo React Component Construction
function Accordion (props) {
    
    const accordionData = props.data;
    return (
        <div>
            {accordionData.map((item, index) => {
                return (
                    <div key={["accordion_"+index]}>
                        <h1>{item.main}</h1>
                        <p>{item.hidden}</p>
                    </div>
                    )
            })}
            
        </div>
    )
}

export default Accordion;

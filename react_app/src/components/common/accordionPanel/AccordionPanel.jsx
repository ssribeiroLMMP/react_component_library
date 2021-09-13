// # Main Import 
import React, { useState } from 'react';

// # Import Component Style
import './AccordionPanel.css';

function AccordionSection(props) {
    return (
        <div className={"accordion_section"}>
            {props.children}
        </div>
    )
}

function AccordionContainer(props) {
    return (
        <div className={"accordion_container"}>
            {props.children}
        </div>
    )
}

function AccordionWrap(props) {
    return (
        <div className={"accordion_wrap"}>
            {props.children}
        </div>
    )
}

function AccordionDropdown(props) {
    return (
        <div className={"accordion_dropdown"}>
            {props.children}
        </div>
    )
}

// # Logo React Component Construction
function Accordion (props) {
    
    const accordionData = props.data;
    return (
        <AccordionSection>
            {/* <AccordionContainer>
                <div>
                    {accordionData.map((item, index) => {
                        return (
                            <>
                            <AccordionWrap key={["accordion_"+index]}>
                                <h1>{item.main}</h1>
                            </AccordionWrap>
                            <AccordionDropdown>
                                <p>{item.hidden}</p>
                            </AccordionDropdown>
                            </>
                            )
                    })}
                </div>
            </AccordionContainer> */}
        </AccordionSection>
    )
}

export default Accordion;

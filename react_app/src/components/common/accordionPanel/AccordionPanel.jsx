// # Main Import 
import React, { useState } from 'react';

// # Import Component Style
import './AccordionPanel.css';

// Accordion External Section
function AccordionSection(props) {
    return (
        <div className={"accordion_section"}>
            {props.children}
        </div>
    )
}

// Container to multiple Accordion Items - mapped 
function AccordionContainer(props) {
    return (
        <div className={"accordion_container"}>
            {props.children}
        </div>
    )
}

// Accordion Item Dropdown - Part that is hidden
function AccordionDropdown(props) {
    
    return (
        <div className={"accordion_dropdown"}>
            {/* <p>{props.body}</p> */}
            {props.children}
        </div>
    )
}

// Accordion Item Wrap - Part that is showing
function AccordionWrap(props) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            <div onClick={() => setIsOpen(!isOpen)} className={"accordion_wrap"}>
                <h1>{props.title}</h1>
                <div> {isOpen ? "-" : "+"}</div>
            </div>
            {isOpen && 
                <AccordionDropdown body={props.body}>
                    {props.children}
                </AccordionDropdown>}
        </div>
        
    )
}

// # Accordion React Component Construction
function Accordion (props) {
    
    const accordionData = props.data;
    
    return (
        <AccordionSection>
            <AccordionContainer>
                {accordionData.map((item, index) => {
                        return (
                            <>
                            <AccordionWrap key={["accordion_"+index]}
                                            title={item.main}>
                                {item.hidden}
                            </AccordionWrap>
                            </>
                            );
                    })}
            </AccordionContainer> 
        </AccordionSection>
    )
}

export default Accordion;

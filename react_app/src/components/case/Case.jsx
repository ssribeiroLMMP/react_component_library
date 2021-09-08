// # Main Import 
import React from 'react';

// # Import Component Style
import './Case.css'

// All Components import
import { GridActionIcon } from "../common";

// # Logo React Component Construction
function Case (props) {
    
    return (
        // Case Row assembled by Action Icons and Other Fields
        <div className="logo" id={["case_"+props.id]} href={props.url}>
            <div className="field_actions">
                <GridActionIcon routeURL={"/cases_1"}
                                tooltip={"Edit Case"}
                                className={"scope"}
                                icon={"fas fa-edit"} 
                                backgroundColor={"blue"}
                                color={"white"}/>
                <GridActionIcon routeURL={"/cases_1"}
                                tooltip={"Edit Case"}
                                className={"scope"}
                                icon={"fas fa-view"} 
                                backgroundColor={"green"}
                                color={"white"}/>
               <GridActionIcon routeURL={"/cases_1"}
                                tooltip={"Edit Case"}
                                className={"scope"}
                                icon={"fas fa-delete"} 
                                backgroundColor={"red"}
                                color={"white"}/>
            </div>
            <div className="field_name">{props.name}</div>
            <div className="field_desc">{props.description}</div>
            <div className="field_created">{props.created}</div>
            <div className="field_modified">{props.modified}</div>
            <div className="field_lastrun">{props.last_run}</div>
        </div>
    )
}

// # CaseGridView React Component Construction
function CasesGridView (props) {
    const cases = props.caseData;

    return (
        // Logo assembled by Icon and Name
        <div className="scope">
            {cases.map((singleCase) => (
                <Case id={singleCase.id}
                        name={singleCase.name}
                        description={singleCase.description}
                        created={singleCase.created}
                        modifield={singleCase.modified} 
                        last_run={singleCase.lastrun} />
            ))}
        </div>
    );

};

export { Case , CasesGridView };
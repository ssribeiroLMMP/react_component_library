// # Main Import 
import React from 'react';
import { darkColors , lightColors } from '../common';
// # Import Component Style
import './Case.css'

// All Components import
import { GridActionIcon } from "../common";

// # Logo React Component Construction
function Case (props) {
    
    return (
        // Case Row assembled by Action Icons and Other Fields
        <tr className="caseRow" id={["case_"+props.id]} href={props.url}>
            <td className="field_actions">
                <GridActionIcon routeURL={"/cases_1"}
                                tooltip={"Edit Case"}
                                className={"scope"}
                                icon={"fas fa-edit"} 
                                backgroundColor={darkColors.yellow}
                                color={"white"}/>
                <GridActionIcon routeURL={"/cases_1"}
                                tooltip={"View Case"}
                                className={"scope"}
                                icon={"fas fa-eye"} 
                                backgroundColor={darkColors.blue}
                                color={"white"}/>
                <GridActionIcon routeURL={"/cases_1"}
                                tooltip={"Delete Case"}
                                className={"scope"}
                                icon={"fas fa-trash"} 
                                backgroundColor={darkColors.red}
                                color={"white"}/>
            </td>
            <td className="field_name">{props.name}</td>
            <td className="field_desc">{props.description}</td>
            <td className="field_created">{props.created}</td>
            <td className="field_modified">{props.modified}</td>
            <td className="field_lastrun">{props.last_run}</td>
            
        </tr>
    )
}

// # CaseGridView React Component Construction
function CasesGridView (props) {
    const caseLabels = props.caseLabels;
    const cases = props.caseData;

    return (
        // Logo assembled by Icon and Name
        <table className="caseGrid">
            <thead className="caseGrid_header">
                <tr>
                    {caseLabels.map((caseLabel) => (
                    <th>{caseLabel}</th>
                ))}
                </tr>
            </thead>
            <tbody>
                {cases.map((singleCase) => (
                    <Case id={singleCase.id}
                            name={singleCase.name}
                            description={singleCase.description}
                            created={singleCase.created}
                            modified={singleCase.modified} 
                            last_run={singleCase.lastrun} />
                ))}
            </tbody>
        </table>
    );

};

export { Case , CasesGridView };
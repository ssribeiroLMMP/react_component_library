// # Main Import 
import React from 'react';

// # Import Component Style
import './Case.css'

// # Logo React Component Construction
function Case (props) {
    
    return (
        // Case Row assembled by Action Icons and Other Fields
        <div className="logo" id={["case_"+props.id]} href={props.url}>
            <div className="field_actions">
                <i className="edit_case_button"></i>
                <i className="view_case_button"></i>
                <i className="delete_case_button"></i>
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
// # Main Import 
import React from 'react';
import { GridActionIcon } from '../index';

// # Import Component Style
import './ExpandableGrid.css'

// # Expandable Action Column React Component Construction
function ActionColumn(props) {
    
    //Local Variable
    // actions:[{tooltip: "Edit Case",icon: "fas fa-edit",
    //             key: "edit_case_button_",route: "/case?id=",
    //             backgroundColor: darkColors.blue ,color: darkColors.white },
    //         {tooltip: "Delete Case",icon: "fas fa-trash",
    //             key: "delete_case_button_",route: "/case?id=",
    //             backgroundColor: darkColors.blue ,color: darkColors.white },
    //         {tooltip: "Dupicate Case",icon: "fas fa-copy",
    //             key: "duplicate_case_button_",route: "/case?id=",
    //             backgroundColor: darkColors.blue ,color: darkColors.white }]
    const actions = props.actions;
    const id = props.id;

    return (
        <td className="expandable_grid_actions_column">
            {actions.map((action) => (
                <GridActionIcon routeURL={action.route + id}
                                tooltip={action.tooltip}
                                className={"action_icon_button"}
                                icon={action.icon}
                                backgroundColor={action.backgroundColor}
                                color={action.color}/>
            ))}
        </td>
    )
}

// function notID(data, key) {
//     if (key!== "id") {
//         return (
//             <td> {data[key]} </td>
//         )
//     }
// }

// # Expandable Row React Component Construction
function ExpandableRow(props) {

    // Row Data Structure
    // rowData{actions: [{tooltip: "Edit Case",icon: "fas fa-edit",
    //                      key: "edit_case_button_",route: "/case?id=",
    //                      backgroundColor: darkColors.blue ,color: darkColors.white },
    //                   {tooltip: "Delete Case",icon: "fas fa-trash",
    //                      key: "delete_case_button_",route: "/case?id=",
    //                      backgroundColor: darkColors.blue ,color: darkColors.white },
    //                  {tooltip: "Dupicate Case",icon: "fas fa-copy",
    //                      key: "duplicate_case_button_",route: "/case?id=",
    //                      backgroundColor: darkColors.blue ,color: darkColors.white }],
    //        {data: {col1(first Column without actions):"Value",col2:"Value",col3:"Value",...}
    const rowdata = props.rowData
    const actions = props.actions
    const rowOrder = ['id','name','desc','created','modified','lastrun']

    return (
        // Case Row assembled by Action Icons and Other Fields
        <tr className="caseRow" id={["case_"+rowdata.id]}>
            {/* Action Column */}
            <ActionColumn actions={actions} id={rowdata.id} />
            {/* Regular Column $TODO: Separate Columns and Expandable Columns */}
            {rowOrder.map((key) => (
                <td> {rowdata[key]} </td>
            ))}
        </tr>
    )

}

// # Expandable Grid React Component Construction
//function ExpandableGrid(props) {
function ExpandableGrid() {
    
    //Local Variables
    // metaData Object holds the info of grid Labels and available actions:
    // metaData Object Structure:
    // metaData = { header: [{key: "actions",label:"Actions"(omit if no actions),expandable:False},
    //                       {key: "name",label: "Name",expandable:False},
    //                       {key: "desc",label: "Description", expandable:True},
    //                       {key: "created", label: "Created"), expandable: True},
    //                       ...],
    //              actions: [{tooltip: ,icon: ,key: ,route(url): ,backgroundColor: ,color: },
    //                       {tooltip: ,icon: ,key: ,url: ,backgroundColor: ,color: }
    //                        ...
    //                        ]
    //             }
    const metaData = { header: [{key: "action", label: "Actions", expandable: false},
                                {key: "id",label: "ID", expandable: false},
                                {key: "name",label: "Name", expandable: false},
                                {key: "desc",label: "Description", expandable: true},
                                {key: "created",label: "Created", expandable: true},
                                {key: "modified", label: "Modified", expandable: true},
                                {key: "lastrun", label: "Last Run", expandable: true}],
                        actions:[{tooltip: "Edit Case",icon: "fas fa-edit",
                                    key: "edit_case_button_",route: "/case?id=",
                                    backgroundColor: darkColors.yellow ,color: darkColors.white },
                                {tooltip: "Delete Case",icon: "fas fa-trash",
                                    key: "delete_case_button_",route: "/case?id=",
                                    backgroundColor: darkColors.red ,color: darkColors.white },
                                {tooltip: "Dupicate Case",icon: "fas fa-copy",
                                    key: "duplicate_case_button_",route: "/case?id=",
                                    backgroundColor: darkColors.blue ,color: darkColors.white }]
                        }
    //const metaData = props.metaData;
    // Data holds the grid data:
    // data Object holds the info of grid Labels and available actions:
    // data Object Structure:
    const data = [{col1:"Value",col2:"Value",col3:"Value",...},
                {col1:"Value",col2:"Value",col3:"Value",...},...]
    //const data = props.data;
    return (
        // Logo assembled by Icon and Name
        <div className='expandable_grid_container'>
            <div>
                <table className="expandable_grid">
                    <thead className="expandable_grid_header">
                        <tr>
                            {metaData.header.map((caseLabel) => (
                            <th>{caseLabel.label}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row) => (
                            <ExpandableRow actions={metaData.actions} 
                                            rowData={row}/>
                        ))}
                    </tbody>
                </table>
                {data.length == 0 &&
                <div className='expandable_grid_container_empty'>
                    To add a new case click +
                </div>}
            </div>
        </div>
    )

}

export default ExpandableGrid;

// # Main Import 
import React from 'react';
import { darkColors } from '..';
import { GridActionIcon } from '..';

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

    return (
        <td className="expandable_grid_actions_column">
            {actions.map((action) => (
                <GridActionIcon routeURL={action.route}
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

    return (
        // Case Row assembled by Action Icons and Other Fields
        <tr className="caseRow" id={["case_"+props.id]} href={props.url}>
            {/* Action Column */}
            <ActionColumn actions={actions} />
            {/* Regular Column $TODO: Separate Columns and Expandable Columns */}
            {Object.keys(rowdata).map((key) => (
                <td> {rowdata[key]} </td>
            ))}
        </tr>
    )

}

// # Expandable Grid React Component Construction
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
    // Data holds the grid data:
    // data Object holds the info of grid Labels and available actions:
    // data Object Structure:
    // data = [{col1:"Value",col2:"Value",col3:"Value",...},
    //             {col1:"Value",col2:"Value",col3:"Value",...},...]
    const data = [  {id:1, name:"Case 1",desc:"Demo Case 1", created:"01/01/2021 09:00:00", modified:"01/03/2021 09:00:00", lastrun:"01/03/2021 09:00:00"},
                    {id:2, name:"Case 2",desc:"Demo Case 2", created:"01/04/2021 09:00:00", modified:"05/03/2021 09:00:00", lastrun:"05/04/2021 09:00:00"}
];
    return (
        // Logo assembled by Icon and Name
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
    )

}

export default ExpandableGrid;

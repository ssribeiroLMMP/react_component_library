// Main import of React
import React from 'react';

import './Cases.css';

// All Components import
import { CasesGridView } from '../components/case';
import { ExpandableGrid } from '../components/common';

function Cases() {

    const caseLabels = ["Actions","Name", "Description","Creation date","Modified date","Last Run date" ]
    const caseData = [  {id:1, name:"Case 1",desc:"Demo Case 1",  created:"01/01/2021 09:00:00", modified:"01/03/2021 09:00:00", lastrun:"01/03/2021 09:00:00"},
                        {id:2, name:"Case 2",desc:"Demo Case 2",  created:"01/04/2021 09:00:00", modified:"05/03/2021 09:00:00", lastrun:"05/04/2021 09:00:00"}
                    ];

    // Variables and Constants

    return (
        // React Browser Router
        <div className="caseGridScope" style={{color:"white",textDecoration:"none"}}>
            <h4> User's Cases: </h4>
            {/* <CasesGridView caseData={caseData} caseLabels={caseLabels}/>  */}
            <ExpandableGrid />
            {/* </CasesGridView>data={casesData}/> */}
        </div>
    )
}

export default Cases;

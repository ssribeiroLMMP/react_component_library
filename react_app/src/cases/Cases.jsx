// Main import of React
import React from 'react';
import { Link } from "react-router-dom";

import './Cases.css';

// All Components import
// import { Case, CasesGridView } from '../components/case';

function Cases() {

    // Variables and Constants

    return (
        // React Browser Router
        <div className="scope" style={{color:"white",textDecoration:"none"}}>
            <Link to="/cases_1"> Cases </Link>
        </div>
    )
};

export default Cases;

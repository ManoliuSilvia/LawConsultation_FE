import {useEffect, useState} from "react";
import CaseAssigService from "../services/caseassigService";

const CaseAssignments = () => {
    const [cases, setCases] = useState([]);

    useEffect(() => {
        CaseAssigService.getAll().then(res => res.json().then(data => setCases(data)));
    })

    return (
        <div>see all cases</div>
    )
}

export default CaseAssignments;
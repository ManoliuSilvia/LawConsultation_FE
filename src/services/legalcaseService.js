const BaseUrl = "http://localhost:8080/l_cases"

const LegalCaseService = {
    create: (userId, caseType, description) => {
        const params = new URLSearchParams({userId, caseType, description}).toString();
        return fetch(`${BaseUrl}/create?${params}`, {
            headers: {
                "Content-Type": "application/json"
            },
            method: 'POST'
        });
    },
    getAllByCaseType:(caseType) => {
        return fetch(`${BaseUrl}/getAllByCaseType?caseType=${caseType}`, {
            headers:{
                "Content-Type": "application/json"
            },
            method: 'GET'
        })
    },
    changeStatus:(legalCase) => {
        return fetch(`${BaseUrl}/changeStatus`, {
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(legalCase),
            method:'POST'
        })
    }
}

export default LegalCaseService;
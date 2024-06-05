const BaseUrl = "http://localhost:8080/case_assigs"

const CaseAssigService = {
    getAll:() => {
        return fetch(`${BaseUrl}/getAll`, {
            headers:{
                "Content-Type": "application/json"
            }
        })
    },
    create:(data) => {
        return fetch(`${BaseUrl}/create`, {
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(data),
            method: 'POST'
        })
    }
}

export default CaseAssigService


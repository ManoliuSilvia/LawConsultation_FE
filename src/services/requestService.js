const BaseUrl = "http://localhost:8080/requests"

const RequestService = {
    apply: (userId, specialization, description) => {
        const params = new URLSearchParams({userId, specialization, description}).toString();
        return fetch(`${BaseUrl}/create?${params}`, {
            headers: {
                "Content-Type": "application/json"
            },
            method: 'POST'
        });
    },
    getAllBySpecialization:(specialization) => {
          return fetch(`${BaseUrl}/getAllBySpecialization?specialization=${specialization}`, {
              headers:{
                  "Content-Type": "application/json"
              },
              method: 'GET'
          })
    },
    acceptRequest: (requestId, approverId) =>{
        const params = new URLSearchParams({requestId, approverId}).toString();
        return fetch(`${BaseUrl}/approve?${params}`, {
            headers: {
                "Content-Type": "application/json"
            },
            method: 'POST'
        })
    },
    denyRequest: (requestId, approverId) =>{
        const params = new URLSearchParams({requestId, approverId}).toString();
        return fetch(`${BaseUrl}/reject?${params}`, {
            headers: {
                "Content-Type": "application/json"
            },
            method: 'POST'
        })
    }
}

export default RequestService;
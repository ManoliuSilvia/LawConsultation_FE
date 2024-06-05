const BaseUrl = "http://localhost:8080/users"

const UserService = {
    register: (data) => {
        //const params = new URLSearchParams({email, username, password}).toString();
        return fetch(`${BaseUrl}/register`, {
            headers: {
                "Content-Type": "application/json"
            },
            method: 'POST',
            body: JSON.stringify(data)
        });
    },
    login_client: (email, password) => {
        const params = new URLSearchParams({email, password}).toString();
        return fetch(`${BaseUrl}/login_client?${params}`, {
            headers:{"Content-Type": "application/json"},
            method: 'POST'
        })
    },
    login_lawyer: (email, password) => {
        const params = new URLSearchParams({email, password}).toString();
        return fetch(`${BaseUrl}/login_lawyer?${params}`, {
            headers:{"Content-Type": "application/json"},
            method: 'POST'
        })
    },
    getUser:(userId) => {
        return fetch(`${BaseUrl}/getById/${userId}`, {
            headers:{"Content-Type": "application/json"}
        })
    }
}


export default UserService
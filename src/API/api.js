import API_URL from './config.js'


const ticketService = {
    async login(email, password) {
        const response = await fetch(`${API_URL}login`, {
            method: "POST",
            headers: {
                'Content-type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({
                email: email,
                password: password,
            })
        })
    
        if (response.ok) {
    
            return response.json()
        } else {
            let msg = await response.json()
            // eslint-disable-next-line no-undef
            Swal.fire({
                icon: 'error',
                title: response.status,
                text: msg.message,
            })
        }
    },
    async codeRegister(code) {
        const response = await fetch(`${API_URL}ticket`, {
            method: "POST",
            headers: {
                'Content-type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({
                code: code,
            })
        })
    
        if (response.ok) {
    
            return response.json()
        } else {
            let msg = await response.json()
            // eslint-disable-next-line no-undef
            Swal.fire({
                icon: 'error',
                title: response.status,
                text: msg.message,
            })
        }
    }

}



export default ticketService

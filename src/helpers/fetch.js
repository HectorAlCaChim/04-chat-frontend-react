export const fetchSinToken = async(endpoint, data, method = 'GET') => {
    const url = `http://localhost:3001/api/${endpoint}`;

    if (method === 'GET') {
        const resp = await fetch(url);
        return await resp.json();
    } else {
        const resp = await fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify( data)
        });
        return await resp.json();
    }
}

export const fetchConToken = async(endpoint, data, method = 'GET') => {
    const url = `http://localhost:3001/api/${endpoint}`;
    const token = localStorage.getItem('token')
    if (method === 'GET') {
        const resp = await fetch(url, {
            headers: {
                'token': token
            }
        });
        return await resp.json();
    } else {
        const resp = await fetch(url, {
            method,
            headers: {
                'token': token,
                'Content-type': 'application/json'
            },
            body: JSON.stringify( data)
        });
        return await resp.json();
    }
}
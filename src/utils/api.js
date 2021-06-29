const apiURL = process.env.REACT_APP_API_URL;

async function api(endpoint, { data, ...customConfig } = {}) {
    const config = {
        method: data ? 'POST' : 'GET',
        body: data ? JSON.stringify(data) : undefined,
        headers: {
            'content-type': 'application/json',
        },
        ...customConfig,
    };

    return fetch(`${apiURL}/${endpoint}`, config).then(async response => {
        const data = await response.json();
        if (response.ok) {
            return data;
        }
        return Promise.reject(data);
    });
}

export { api };

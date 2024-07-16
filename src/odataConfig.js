import axios from 'axios';
import { ODataClient } from '@odata/client';

const serviceRoot = 'https://your-odata-service-root-url';
const token = 'your-auth-token';

const client = ODataClient.init(serviceRoot, {
    fetch: (url, options) => {
        return axios({
            url,
            method: options.method,
            headers: {
                ...options.headers,
                Authorization: `Bearer ${token}`,
            },
            data: options.body,
        }).then(response => {
            return {
                status: response.status,
                headers: response.headers,
                json: () => response.data,
            };
        });
    },
});

export default client;

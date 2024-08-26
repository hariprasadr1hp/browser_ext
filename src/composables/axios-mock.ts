import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const useMock = process.env.VUE_APP_USE_MOCK === 'true';

if (useMock) {
    const loadJson = async (path: string) => {
        const response = await fetch(path);
        return response.json();
    };

    const mock = new MockAdapter(axios);

    loadJson('/src/api/mock/data/users.json').then((data) => {
        mock.onGet('/api/users').reply(200, data);
    });
}

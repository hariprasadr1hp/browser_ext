// src/composables/axios-mock.ts
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const useMock = process.env.VUE_APP_USE_MOCK === 'true';

if (useMock) {
  // Helper function to load JSON data
  const loadJson = async (path: string): Promise<any> => {
    const response = await fetch(path);
    return response.json();
  };

  const mock = new MockAdapter(axios);

  // Mock any GET request to /api/users
  loadJson('/src/api/mock/data/users.json').then((data) => {
    mock.onGet('/api/users').reply(200, data);
  });

  // You can add more mock routes here
}

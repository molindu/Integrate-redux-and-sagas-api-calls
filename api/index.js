const BASE_URL = 'https://portfolio-molindu-1.000webhostapp.com';

const api = {
  fetchData: async () => {
    try {
      const response = await fetch(`${BASE_URL}/train_list.json`);
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  },
};

export default api;

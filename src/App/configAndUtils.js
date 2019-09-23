export const URLS = {
  apiUrl: 'https://jsonplaceholder.typicode.com',
};

export const isDevMode = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

export default {
  isDevMode,
  reduxLogging: isDevMode,
};

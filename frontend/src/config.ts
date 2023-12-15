export default {
  apiOrigin: (() => {
    if (process.env.NODE_ENV !== 'production') {
      return process.env.API_ORIGIN ?? 'http://localhost:8080/truelayer';
    }
    return 'https://api.lunchmoney.home.arpa/truelayer';
  })(),
};

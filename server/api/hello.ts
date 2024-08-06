export default defineEventHandler(event => {
  return {
    list: [
      { id: 0, title: 'Name', message: 'Hi' },
      { id: 1, title: 'Title', message: 'Hello' },
    ],
  };
});

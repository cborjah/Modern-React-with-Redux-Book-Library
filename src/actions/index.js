export function selectBook(book) {
  // Action creators return an action, an object with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}

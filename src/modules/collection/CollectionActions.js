export const ADD_GIF_TO_COLLECTION = 'ADD_GIF_TO_COLLECTION';
export const REMOVE_GIF_FROM_COLLECTION = 'REMOVE_GIF_FROM_COLLECTION';

export const addGifToCollection = gif => ({
  type: ADD_GIF_TO_COLLECTION,
  payload: { gif }
});

export const removeGifFromCollection = index => ({
  type: REMOVE_GIF_FROM_COLLECTION,
  payload: { index }
});
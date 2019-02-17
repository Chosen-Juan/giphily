export const ADD_GIF_TO_COLLECTION = 'ADD_GIF_TO_COLLECTION';
export const REMOVE_GIF_FROM_COLLECTION = 'REMOVE_GIF_FROM_COLLECTION';
export const SWITCH_COLLECTION = 'SWITCH_COLLECTION';
export const DELETE_COLLECTION = 'DELETE_COLLECTION';
export const CREATE_COLLECTION = 'CREATE_COLLECTION';
export const RENAME_COLLECTION = 'RENAME_COLLECTION';

export const addGifToCollection = gif => ({
  type: ADD_GIF_TO_COLLECTION,
  payload: { gif }
});

export const removeGifFromCollection = id => ({
  type: REMOVE_GIF_FROM_COLLECTION,
  payload: { id }
});

export const switchCollection = id => ({
  type: SWITCH_COLLECTION,
  payload: { id }
});

export const deleteCollection = index => ({
  type: DELETE_COLLECTION,
  payload: { index }
});

export const createCollection = name => ({
  type: CREATE_COLLECTION,
  payload: { name }
});

export const renameCollection = (id, name) => ({
  type: RENAME_COLLECTION,
  payload: { id, name }
});
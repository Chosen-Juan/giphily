import Giphy from '../../common/Giphy';

export const FETCH_GIF_BEGIN = 'FETCH_GIF_BEGIN';
export const FETCH_GIF_SUCCESS = 'FETCH_GIF_SUCCESS';
export const FETCH_GIF_FAILURE = 'FETCH_GIF_FAILURE';

export function fetchGifs(query) {
  return dispatch => {
    dispatch(fetchGifBegin());
    const params = { q: query };
    return Giphy.get('/search', { params })
      .then(res => {
        dispatch(fetchGifSuccess(res.data.data));
        return res.data.data;
      })
      .catch(error => {
        dispatch(fetchGifFailure(error));
      });
  }
};

export const fetchGifBegin = query => ({
  type: FETCH_GIF_BEGIN,
  payload: { query }
});

export const fetchGifSuccess = gifList => ({
  type: FETCH_GIF_SUCCESS,
  payload: { gifList }
});

export const fetchGifFailure = error => ({
  type: FETCH_GIF_FAILURE,
  payload: { error }
});

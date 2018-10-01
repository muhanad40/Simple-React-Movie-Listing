import { API, getNowPlaying } from '../actions';
import { GET_NOW_PLAYING, STORE_NOW_PLAYING } from '../actionTypes';
import mockNowPlayingData from '../__mocks__/now_playing.json';

describe('Actions', () => {
  it('should fetch now playing movies and dispatch store action', () => {
    const mockDispatch = jest.fn();
    fetch.mockResponseOnce(JSON.stringify(mockNowPlayingData))

    const promise = getNowPlaying()(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toHaveBeenCalledWith({
      type: GET_NOW_PLAYING
    });
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(API.nowPlaying);
    promise.then(() => {
      expect(mockDispatch).toHaveBeenLastCalledWith({
        type: STORE_NOW_PLAYING,
        movies: mockNowPlayingData.results
      });
    });
  });
});
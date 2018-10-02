import App from '../../components/App';
import mockNowPlayingData from '../../__mocks__/now_playing.json';
import { setupCreator } from '../utils';

const initProps = {
  movies: mockNowPlayingData.results,
  getNowPlaying: jest.fn(),
  getGenres: jest.fn().mockImplementation(() => {
    return new Promise(cb => cb());
  }),
  getConfiguration: jest.fn().mockImplementation(() => {
    return new Promise(cb => cb());
  })
};
const setup = setupCreator(App, initProps);

describe('App component', () => {
  let wrapper;

  beforeEach(() => {
    ({ wrapper } = setup());
    initProps.getGenres.mockClear();
    initProps.getNowPlaying.mockClear();
  });

  it('should fetch configuration on initial render', () => {
    expect(initProps.getConfiguration).toHaveBeenCalledTimes(1);
  });

  it('should fetch now playing movies on initial render', () => {
    expect(initProps.getNowPlaying).toHaveBeenCalledTimes(1);
  });

  it('should fetch movie genres on initial render', () => {
    expect(initProps.getGenres).toHaveBeenCalledTimes(1);
  });

  it('should render movie cards', () => {
    expect(wrapper.find('Card')).toHaveLength(mockNowPlayingData.results.length);
  });
});
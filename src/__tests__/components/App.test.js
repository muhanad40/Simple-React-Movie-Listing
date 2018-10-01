import App from '../../components/App';
import mockNowPlayingData from '../../__mocks__/now_playing.json';
import { setupCreator } from '../utils';

const setup = setupCreator(App, {
  movies: mockNowPlayingData.results,
  getNowPlaying: jest.fn()
});

describe('App component', () => {
  let wrapper;

  beforeEach(() => {
    ({ wrapper } = setup());
  });

  it('should render movie cards', () => {
    expect(wrapper.find('Card')).toHaveLength(mockNowPlayingData.results.length);
  });
});
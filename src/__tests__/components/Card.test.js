import Card from '../../components/Card';
import mockNowPlayingData from '../../__mocks__/now_playing.json';
import mockGenres from '../../__mocks__/genres.json';
import { setupCreator } from '../utils';

const movieData = mockNowPlayingData.results[0];
const setup = setupCreator(Card, {
  ...movieData,
  genres: mockGenres.genres
});

describe('Card component', () => {
  let instance;
  let wrapper

  beforeAll(() => {
    ({ instance, wrapper } = setup());
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
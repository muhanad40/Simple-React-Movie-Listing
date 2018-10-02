import Filters from '../../components/Filters';
import mockGenres from '../../__mocks__/genres.json';
import { setupCreator } from '../test-utils';

const setup = setupCreator(Filters, {
  genres: mockGenres.genres
});

describe('Filters component', () => {
  let wrapper

  beforeAll(() => {
    ({ wrapper } = setup());
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
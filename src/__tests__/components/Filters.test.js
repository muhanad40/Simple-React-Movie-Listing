import Filters from '../../components/Filters';
import mockGenres from '../../__mocks__/genres.json';
import { setupCreator } from '../test-utils';

const initProps = {
  cloneMoviesForFiltering: jest.fn(),
  filterByGenre: jest.fn(),
  genres: mockGenres.genres,
  filterByRating: jest.fn()
};
const setup = setupCreator(Filters, initProps);

describe('Filters component', () => {
  let wrapper, instance;

  beforeAll(() => {
    ({ wrapper, instance } = setup());
  });

  it('should render correctly', () => {
    expect(instance).toMatchSnapshot();
  });

  it('should add selected filters to state', () => {
    const genresCheckboxes = wrapper.find('.genres input');

    genresCheckboxes.first().simulate('change', {
      target: {
        checked: true,
        value: mockGenres.genres[0].id
      }
    });

    expect(wrapper.state().selectedGenreIds).toEqual([mockGenres.genres[0].id]);
  });

  it('should remove unchecked filters from state', () => {
    wrapper.setState({
      selectedGenreIds: [
        mockGenres.genres[0].id,
        mockGenres.genres[1].id
      ]
    });
    const genresCheckboxes = wrapper.find('.genres input');

    genresCheckboxes.first().simulate('change', {
      target: {
        checked: false,
        value: mockGenres.genres[0].id
      }
    });

    expect(wrapper.state().selectedGenreIds).toEqual([ mockGenres.genres[1].id ]);
  });

  it('should add selected filters to existing state and call `filterByGenre` prop with genres IDs passed as arg', () => {
    wrapper.setState({
      selectedGenreIds: [1, 4]
    });
    const genresCheckboxes = wrapper.find('.genres input');
    const expectedGenreIds = [1, 4, mockGenres.genres[0].id];

    genresCheckboxes.first().simulate('change', {
      target: {
        checked: true,
        value: mockGenres.genres[0].id
      }
    });

    expect(wrapper.state().selectedGenreIds).toEqual(expectedGenreIds);
    expect(initProps.filterByGenre).toHaveBeenCalledWith(expectedGenreIds);
  });

  it('should clone movies for filtering once last genre is unchecked', () => {
    wrapper.setState({
      selectedGenreIds: [
        mockGenres.genres[0].id
      ]
    });
    const genresCheckboxes = wrapper.find('.genres input');

    genresCheckboxes.first().simulate('change', {
      target: {
        checked: false,
        value: mockGenres.genres[0].id
      }
    });

    expect(initProps.cloneMoviesForFiltering).toHaveBeenCalledTimes(1);
  });

  it('should pass change callback to Slider', () => {
    expect(wrapper.find('.rating-slider').props().onChange).toEqual(instance.onRatingSliderChange);
  });

  it('should call `filterByRating` prop when slider callback is called', () => {
    instance.onRatingSliderChange(4);

    expect(initProps.filterByRating).toHaveBeenCalledWith(4);
  });
});
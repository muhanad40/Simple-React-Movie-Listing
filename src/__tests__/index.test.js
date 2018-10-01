import React from 'react';

import App from '../components/App';
import { setupCreator } from './utils'

const initProps = {
  getNowPlaying: jest.fn(),
  getGenres: jest.fn()
};
const setup = setupCreator(App, initProps);

describe('App component', () => {
  let component;

  beforeEach(() => {
    initProps.getNowPlaying.mockClear();
    initProps.getGenres.mockClear();
    component = setup();
  });

  it('should make ajax call to fetch list of now showing movies on initial render', () => {
    expect(initProps.getNowPlaying).toHaveBeenCalledTimes(1);
  });

  it('should make ajax call to fetch genres on initial render', () => {
    expect(initProps.getGenres).toHaveBeenCalledTimes(1);
  });
});

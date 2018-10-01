import React from 'react';
import { shallow } from 'enzyme';

export function setupCreator(Component, initialProps) {
  return () => {
    const wrapper = shallow(<Component { ...initialProps } />)

    return {
      wrapper,
      instance: wrapper.instance(),
      props: wrapper.props()
    };
  }
}
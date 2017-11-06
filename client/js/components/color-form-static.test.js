import React from 'react';
import renderer from 'react-test-renderer';
import { render } from 'enzyme';

import { ColorForm } from './color-form';

describe('<ColorForm /> React Test Renderer Static HTML', () => {

  test('<ColorForm /> renders', () => {
    const tree = renderer.create(<ColorForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });

});

describe('<ColorForm /> Enzyme Static HTML', () => {

  test('<ColorForm /> renders', () => {
    const component = JSON.stringify(render(<ColorForm />).html());
    expect(component).toMatchSnapshot();
  });

});

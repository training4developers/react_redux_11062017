import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme';

import { HelloWorld } from './hello-world';

describe('<HelloWorld /> Shallow with React Test Renderer', () => {

  let component;

  beforeEach(() => {
    const renderer = new ShallowRenderer();
    renderer.render(<HelloWorld />);
    component = renderer.getRenderOutput();
  });

  test('<HelloWorld /> renders', () => {
    expect(component.props.children).toBe('Hello World!');
  });

});

describe('<HelloWorld /> Shallow with Enzyme', () => {

  let component;

  beforeEach(() => {
    component = shallow(<HelloWorld />);
  });

  test('<HelloWorld /> renders', () => {
    expect(component.props().children).toBe('Hello World!');
  });

});
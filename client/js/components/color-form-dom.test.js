import React from 'react';
import TestUtils from 'react-dom/test-utils';
import { mount } from 'enzyme';

import { ColorForm } from './color-form';

jest.unmock('./color-form');

describe('<ColorForm /> Test Utils Mock DOM', () => {

  const colorValue = 'purple';
  const eventHandlers = { submitColor: () => {} };

  let component;
  let componentDOMNode;
  let submitColorSpy;

  beforeEach(() => {
    submitColorSpy = jest.spyOn(eventHandlers, 'submitColor');
    component = TestUtils.renderIntoDocument(<ColorForm buttonText="Save Color" onSubmitColor={eventHandlers.submitColor} />);
    componentDOMNode = TestUtils.findRenderedDOMComponentWithTag(component, 'form');
  });

  test('<ColorForm /> renders', () => {

    expect(component.props.onSubmitColor).toBe(submitColorSpy);
    expect(component.props.buttonText).toBe('Save Color');
    expect(component.state.color).toBe('');

    const inputDOMNode = componentDOMNode.querySelector('input');
    expect(inputDOMNode.value).toBe('');

    inputDOMNode.value = colorValue;
    TestUtils.Simulate.change(inputDOMNode);

    expect(component.state.color).toBe(colorValue);

    TestUtils.Simulate.click(componentDOMNode.querySelector('button'));

    expect(submitColorSpy).toHaveBeenCalledWith(colorValue);
  });

});

describe('<ColorForm /> Enzyme Mock DOM', () => {

  const colorValue = 'purple';
  const eventHandlers = { submitColor: () => {} };

  let component;
  let submitColorSpy;

  beforeEach(() => {
    submitColorSpy = jest.spyOn(eventHandlers, 'submitColor');
    component = mount(<ColorForm buttonText="Save Color" onSubmitColor={eventHandlers.submitColor} />);
  });

  test('<ColorForm /> renders', () => {

    expect(component.props().onSubmitColor).toBe(submitColorSpy);
    expect(component.props().buttonText).toBe('Save Color');
    expect(component.state().color).toBe('');

    const colorInput = component.find('input');
    expect(colorInput.prop('value')).toBe('');

    colorInput.simulate('change', {
      target: { value: colorValue, name: 'color' },
      currentTarget: { value: colorValue }, name: 'color',
    });

    expect(component.state().color).toBe(colorValue);

    component.find('button').simulate('click');

    expect(submitColorSpy).toHaveBeenCalledWith(colorValue);
  });

});
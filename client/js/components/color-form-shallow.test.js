import React from 'react';
import { shallow } from 'enzyme';

import { ColorForm } from './color-form';

jest.unmock('./color-form');

describe('<ColorForm /> Shallow with Enzyme', () => {

  const colorValue = 'purple';
  const eventHandlers = { submitColor: () => {} };

  let component;
  let submitColorSpy;
  let renderSpy;
  let onClickSpy;

  beforeEach(() => {
    submitColorSpy = jest.spyOn(eventHandlers, 'submitColor');
    // use this approach for true class functions
    renderSpy = jest.spyOn(ColorForm.prototype, 'render');
    component = shallow(<ColorForm buttonText="Save Color" onSubmitColor={eventHandlers.submitColor} />);
    // use this approach for class arrow functions
    onClickSpy = jest.spyOn(component.instance(), 'submitColor');
  });

  test('<ColorForm /> renders', () => {

    // instance is needed here because onsubmitColor is not passed to the form node
    expect(component.instance().props.onSubmitColor).toBe(submitColorSpy);
    expect(component.instance().props.buttonText).toBe('Save Color');
    expect(component.state().color).toBe('');

    const colorInput = component.find('input');
    expect(colorInput.prop('value')).toBe('');

    colorInput.simulate('change', {
      target: { value: colorValue, name: 'color' },
      currentTarget: { value: colorValue }, name: 'color',
    });

    expect(component.state().color).toBe(colorValue);

    component.find('button').simulate('click');

    expect(renderSpy).toHaveBeenCalled();
    expect(onClickSpy).toHaveBeenCalled();
    expect(submitColorSpy).toHaveBeenCalledWith(colorValue);
  });

});
import React from 'react';
import {DonationForm} from './DonationForm';
import { render, screen, fireEvent} from '@testing-library/react';

test('form renders correctly disables button for values less than 5', () => {
  const onSubmit = jest.fn(e=>{e.preventDefault()});
  const onChange = jest.fn(e=>{});
  const values = [ 1, 3, 5, 9, 4 , 10];

  const goal = 500;
  let total = 0;
  let donars= 0;

  const props = {
    value: 0,
    total,
    goal,
    onSubmit,
    onChange,
    donars,
  }
  const { getByTestId, rerender} = render(<DonationForm {...props} />);
    const form = getByTestId("donation-form");
    const input = getByTestId("donation-input");
    const button = getByTestId("donation-button");
    expect(form).not.toBe(null)
    expect(input.value).toEqual(`${props.value}`);
    expect(button).toHaveAttribute('disabled');

    values.forEach((val)=>{
    const updatedProps = {...props, value: val};

    rerender(<DonationForm {...updatedProps}/>);
    const form = screen.getByTestId("donation-form");
    const input = screen.getByTestId("donation-input");
    const button = screen.getByTestId("donation-button");
    expect(form).not.toBe(null)
    expect(input.value).toEqual(`${val}`);
    if(val<5){
      expect(button).toHaveAttribute('disabled');
    } else{
      expect(button).not.toHaveAttribute('disabled');
      fireEvent.click(button);
    }
  });
  
  expect(onSubmit).toHaveBeenCalledTimes(values.filter(val => val >= 5).length)


});

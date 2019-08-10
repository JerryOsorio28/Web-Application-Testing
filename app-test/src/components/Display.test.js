import React from 'react';
import { render } from '@testing-library/react';
import Display from './Display';

console.log(Display)

describe('<Display />', () => {
    it('renders without crashing', () => {
        render(console.log(<Display />))
    });
    it('props work', () => {
        const display = render(<Display strikes={2} balls={3}/>)
        display.getByText(/strikes: 2/)
        display.getByText(/balls: 3/)
    })
    it('Component is dumb', () => {
        const display = render(<Display strikes={-2} balls={400}/>)
        display.getByText(/strikes: -2/)
        display.getByText(/balls: 400/)
    })
})
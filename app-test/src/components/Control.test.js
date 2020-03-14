import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Controls from './Controls';

describe('<Controls />', () => {
    it('renders without crashing', () => {
        render(<Controls />)
    });
    it('strike', () => {
        let click = jest.fn();
        const { getByText } = render(<Controls strike={click}/>)
        const strikeButton = getByText(/strike/i);
        fireEvent.click(strikeButton);
        expect(click).toBeCalled();
    })

    it('ball', () => {
        let click = jest.fn();
        const { getByText } = render(<Controls ball={click}/>)
        const ballButton = getByText(/ball/i);
        fireEvent.click(ballButton);
        expect(click).toBeCalled();
    })

    it('foul', () => {
        let click = jest.fn();
        const { getByText } = render(<Controls foul={click}/>)
        const foulButton = getByText(/foul/i);
        fireEvent.click(foulButton);
        expect(click).toBeCalled();
    })

    it('hit', () => {
        let click = jest.fn();
        const { getByText } = render(<Controls hit={click}/>)
        const hitButton = getByText(/hit/i);
        fireEvent.click(hitButton);
        expect(click).toBeCalled();
    })
})

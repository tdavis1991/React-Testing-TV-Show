import React from 'react';
import { render, fireEvent, waitForElement, wait } from '@testing-library/react';
import { fetchShow as mockFetchShow } from './api/fetchShow';
import App from './App';

jest.mock('./api/fetchShow')


test('Shows loading when fetching data from api', async () => {
    const { getByText, queryByText } = render(
        <App setShow={null} />
    )
    
    getByText(/fetching data.../i)

})



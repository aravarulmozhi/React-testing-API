/* eslint-disable no-restricted-globals */
import React from 'react';
import { getAllByAltText, queryAllByAltText, render } from '@testing-library/react';
import axios from 'axios';
import UserList from '../UserList';
jest.mock('axios')

describe('<UsersComponent />', () => {
    test("fetches and displays users",async()=>{
        render(<UserList/>);
        axios.get.mockResolvedValueOnce({
            data: [
              { id: 1, name: 'John Doe' },
              { id: 2, name: 'Jane Smith' }
            ]
          });
         
          expect(screen.getAllByAltText("John Doe")).toBeInTheDocument()
           // Assert that the users are displayed

    })
})
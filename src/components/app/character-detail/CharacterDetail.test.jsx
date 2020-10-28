import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import CharacterDetail from './CharacterDetail';
import { getCharacterById } from '../../../services/avatarApi';
import { MemoryRouter, Route } from 'react-router-dom';

jest.mock('../../../services/avatarApi.js');

describe('CharacterDetail component', () => {
  it('displays a character after a load', () => {
    getCharacterById.mockResolvedValue({
      id: 1,
      name: 'Aayoo',
      affiliation: 'water',
      imageUrl: 'image.jpg'
    });
    render(<MemoryRouter initialEntries={['/character/1']}>
      <Route path="/character:id" component={CharacterDetail}/>
    </MemoryRouter>);

    screen.getByText('Loading.1.2.3');

    return waitFor(() => {
      screen.getByText('Aayoo');
      screen.getByText('water');
      screen.getByAltText('Aayoo');
    });
  });
});

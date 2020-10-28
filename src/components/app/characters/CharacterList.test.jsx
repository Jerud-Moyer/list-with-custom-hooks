import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import CharacterList from './CharacterList';
import { getCharacters } from '../../../services/avatarApi';

jest.mock('../../../services/avatarApi.js');

describe('CharacterList component', () => {
  it('displays a list of characters after a quick load', async() => {
    getCharacters.mockResolvedValue([
      { id: 1, name: 'Aang', imageUrl: 'Aang.jpg' }
    ]);
    render(<MemoryRouter>
      <CharacterList />
    </MemoryRouter>);

    screen.getByText('Loading.1.2.3');

    const characterList = await screen.findByTestId('characters');

    return waitFor(() => {
      expect(characterList).not.toBeEmptyDOMElement();
    });
  });
});

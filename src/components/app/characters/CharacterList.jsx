import React from 'react';
import PropTypes from 'prop-types';
import { useCharacters } from '../../../hooks/characters';
import CharacterItem from './CharacterItem';
import { Link } from 'react-router-dom';

const CharacterList = ({ page }) => {
  const { loading, characters } = useCharacters(page);
  if(loading) return <h1>Loading.1.2.3</h1>;

  const characterElements = characters.map(character => (
    <li key={character.id}>
      <Link to={`./characters/${character.id}`}>
        <CharacterItem {...character} />
      </Link>
    </li>
  ));

  return (
    <ul data-testid="characters">
      {characterElements}
    </ul>
  );
};

CharacterList.propTypes = {
  page: PropTypes.number
};

export default CharacterList;

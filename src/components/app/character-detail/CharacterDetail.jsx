import React from 'react';
import { useParams } from 'react-router-dom';
import { useCharacterById } from '../../../hooks/characters';
import Header from '../../header/Header';


const CharacterDetail = () => {
  const { id } = useParams();
  const { loading, character } = useCharacterById(id);
  if(loading) return <h1>Loading.1.2.3</h1>;
  

  return (
    <>
      <Header />
      <h1>{character.name}</h1>
      <h2>affiliation: {character.affiliation}</h2>
      <img src={character.imageUrl} alt={character.name} />
     
    </>

  );
};



export default CharacterDetail;

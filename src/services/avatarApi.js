export const getCharacters = async(page = 1) => {
  const res = await fetch(
    `https://last-airbender-api.herokuapp.com/api/v1/characters?page=${page}
    `);
  const json = await res.json();

  if(!res.ok) throw 'OOPS! Unable to fetch';
  
  return json.map(character => ({
    id: character._id,
    name: character.name,
    imageUrl: character.photoUrl
  }));
};

export const getCharacterById = async(id) => {
  const res = await fetch(
    `https://last-airbender-api.herokuapp.com/api/v1/characters/${id}
    `);
  const json = await res.json();

  if(!res.ok) throw 'OOPS! Unable to fetch';

  return {
    id: json._id,
    imageUrl: json.photoUrl,
    name: json.name,
    affiliation: json.affiliation
  };

};

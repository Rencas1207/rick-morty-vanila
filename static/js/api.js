export default class API {
  //   async getCharacter(id) {
  //     const response = await fetch(
  //       `https://rickandmortyapi.com/api/character/${id}`
  //     );
  //     const data = await response.json();
  //     return data;
  //   }

  getCharacter(id) {
    return fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => data);
  }
}

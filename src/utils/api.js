class Api {
   constructor() {
   }
   _checkResponse(res) {
      if (res.ok) {
         return res.json();
      }
      return Promise.reject(`Ошибка ${res.status}`);
   }

   getMovies() {
      return fetch(`https://api.themoviedb.org/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10&language=ru`, {
         headers: {
            'Content-Type': 'application/json'
         }
      })
      .then(this._checkResponse)
   }

}

const apiMovies = new Api();

export default apiMovies;
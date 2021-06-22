import {useEffect, useState} from 'react';
import Header from './Header';
import Main from './Main';
import { Switch, Route, useHistory} from 'react-router-dom'
import EndGame from './EndGame'
import apiMovies from '../utils/api'

function App() {
  
  const [newWord, setWord] = useState('')
  const [keyBoardSymbol, setKeyBoardSymbol] = useState({})
  const history = useHistory()

  apiMovies.getMovies()
    .then((moviesList) => {
      console.log(moviesList)
    })
  
  useEffect(()=>{
    apiMovies.getMovies()
    .then((moviesList) => {
      console.log(moviesList)
    })
    history.push('/main/start-game')
    const words = ['яндекс'];
    setWord(words[Math.floor(Math.random() * words.length)]);
  }, [])

  return (
    <div className = "page__container">
      <Header />
        <Switch>
          <Route path="/main">
            <Main
              history={history} 
              newWord = {newWord}
              keyBoardSymbol={keyBoardSymbol}
              getKeyBoardSymbol = {setKeyBoardSymbol}
            />
          </Route>
          <Route path="/victory">
            <EndGame history={history}>
              <h2 className="popup__title">Victory</h2>
            </EndGame>
          </Route>
          <Route path="/gameover">
            <EndGame history={history}>
              <h2 className="popup__title">Game Over</h2>
            </EndGame>
          </Route>
        </Switch>
    </div>
  );
}

export default App;

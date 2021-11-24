import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './components/ui/Header'
import CharacterDisplay from './components/characters/CharacterDisplay'
//import Searchbar from './components/ui/Searchbar'
import axios from 'axios'

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  //Refresh the page. Used for refresh button
  function refreshPage() {
    window.location.reload(false);
  }

  useEffect(() => {
    const fetchItems = async () => {
      //const result = await axios(`https://friends-quotes-api.herokuapp.com/quotes`)
      const result = await axios(`https://friends-quotes-api.herokuapp.com/quotes/4`)

      console.log(result.data)

      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [])

  return (
    <div className="App">
      <h1>Friends Trivia: Guess the One Behind Each Quote</h1>
      <Header />
      <h2>Take a look at the quotes below. Can you guess who said each? Hover over them to reveal the answer.</h2>
      {/* <Searchbar /> */}
      <CharacterDisplay isLoading={isLoading} items={items} />

      {/* Button to refresh the page and generate new quotes */}
      <button className='btnRefreshPage' onClick={refreshPage}>Generate New Quotes</button>
    </div>
  );
}

export default App;

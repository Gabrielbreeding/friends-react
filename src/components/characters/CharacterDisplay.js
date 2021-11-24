import React from 'react'
import CharacterQuote from './CharacterQuote'

const CharacterDisplay = ({ items, isLoading }) => {
    return isLoading ? (<h1>Loading...</h1>) : (<section className="cards">
        {items.map(item => (
            <CharacterQuote item={item}></CharacterQuote>
        ))}
    </section>)
}

export default CharacterDisplay
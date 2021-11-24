import React from 'react'
import cardBackground from '../../images/card-front-background.jpg'
const CharacterQuote = ({ item }) => {
    return (
        <div className='card'>
            <div className='card-inner'>
                <div style={{backgroundImage: 'url('+cardBackground+')', zoom: 50 + '%', display: 'flex', justifyContent: 'center'}} className='card-front'>
                    <ul style={{alignSelf: 'center'}}>
                        <li style={{fontSize: 4 + 'rem'}}>
                            <strong>"{item.quote}"</strong> 
                        </li>
                    </ul>
                </div>
                <div className='card-back'>
                    <h1>{item.character}</h1>
                    <ul>
                        <li style={{fontSize: 1.5 + 'rem'}}>
                            <strong>"{item.quote}"</strong>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CharacterQuote
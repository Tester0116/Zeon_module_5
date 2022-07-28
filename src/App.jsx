import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import { SingleCard } from './components/SingleCard'
import useLocalStorage from './hooks/useLocalStorage'

const cardImages = [
  { src: './assets/js.png', matched: false },
  { src: './assets/python.png', matched: false },
  { src: './assets/css.png', matched: false },
  { src: './assets/nodejs.png', matched: false },
  { src: './assets/photoshop.png', matched: false },
  { src: './assets/php.png', matched: false },
  { src: './assets/html.png', matched: false },
  { src: './assets/sass.png', matched: false },
  { src: './assets/wordpress.png', matched: false },
]

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)

  const [storeName, setStoreName] = useLocalStoragen('name', 'name')

  // shuffle Cards
  const mixCards = () => {
    const mixedCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

    setCards(mixedCards)
    setTurns(0)
  }

  // handle a choice
  const handleChoice = (card) =>
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)

  // comare 2 selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        setCards((prev) => {
          return prev.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true }
            } else {
              return card
            }
          })
        })
        resetTurn()
      } else {
        setTimeout(() => resetTurn(), 500)
      }
    }
  }, [choiceOne, choiceTwo])

  // reset choices &increace turn
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns((prev) => prev + 1)
  }

  useEffect(() => {
    mixCards()
  }, [])

  return (
    <div className="App">
      <h1>Memory Match</h1>
      <button>New Game</button>
      <h3>Name: {storeName}</h3>
      <h2>attempts: {turns}</h2>
      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard
            card={card}
            key={card.id}
            src={require(`${card.src}`)}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            matched={card.matched}
          />
        ))}
      </div>
    </div>
  )
}

export default App

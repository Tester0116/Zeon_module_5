import React from 'react'
import './_singeCard.scss'

export const SingleCard = ({ card, src, handleChoice, flipped, matched }) => {
  const handleClick = () => {
    handleChoice(card)
  }
  return (
    <div className={matched ? 'card matched' : 'card'}>
      <div className={flipped ? 'flipped' : ''}>
        <img className="front" src={src} alt="card front" />
        <img
          className="back"
          src={require('../../assets/cover.png')}
          onClick={handleClick}
          alt="card back"
        />
      </div>
    </div>
  )
}

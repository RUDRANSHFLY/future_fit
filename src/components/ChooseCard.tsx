import React, { useState , useEffect, useCallback } from 'react'
import Card from './Card'
import { Button } from './ui/button';

export interface OccupationType{
  id: number;
  name: string;
  image: string;
}

const ChooseCard = () => {

  
 

 
  const occupation : OccupationType[] = [
    {
      id : 1,
      name : 'Teacher',
      image :"https://images.pexels.com/photos/3184644/pexels-photo-3184644.jpeg"
    },
    {
      id : 2,
      name : 'Lawyer',
      image :"https://images.pexels.com/photos/4427610/pexels-photo-4427610.jpeg",
    }
    ,{
      id : 3,
      name : 'Doctor',
      image :"https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg",
    }
  ]


  const [cards, setCards] = useState(occupation)
  const [displayedCards, setDisplayedCards] = useState<OccupationType[]>([]);
  const [selectedCard, setSelectedCard] = useState<OccupationType | null>(null)
  const [isGameOver, setIsGameOver] = useState(false)


  const selectedRandomCard = useCallback(() => {
    if (cards.length === 0) {
      setIsGameOver(true);
      return;
    }
  
    if (cards.length === 1) {
      setDisplayedCards([cards[0]]);
    } else {
      const firstCard = cards[Math.floor(Math.random() * cards.length)];
      const remainingCards = cards.filter((c) => c.id !== firstCard.id);
      const secondCard = remainingCards[Math.floor(Math.random() * remainingCards.length)];
  
      setDisplayedCards([firstCard, secondCard]);
    }
  }, [cards]);
  
  const handleCardClick = (selected: OccupationType) => {
    setSelectedCard(selected);
  
    if (cards.length > 1) {
      // Keep the selected card and pick a new one from remaining cards
      const remainingCards = cards.filter((c) => c.id !== selected.id);
  
      if (remainingCards.length > 0) {
        const newCard = remainingCards[Math.floor(Math.random() * remainingCards.length)];
        setDisplayedCards([selected, newCard]);
        setCards(remainingCards); // Remove the previous unselected card
      } else {
        setDisplayedCards([selected]); // Only one card left
      }
    }
  };
  
  

  useEffect(() => {
    selectedRandomCard()
  }, [selectedRandomCard])

  const resetGame = () => {
    setCards(occupation)
    setSelectedCard(null)
    setIsGameOver(false)
    selectedRandomCard()
  }
 

  return (
    <div className={'p-4 max-w-2xl mx-auto'}>
      <div className={'mb-5 text-center'}>
        <h2 className={'text-2xl font-bold mb-2 text-black'}>
          Future Fit Career Expolrer 
        </h2>
        <p className={'text-gray-600 mb-4'}>
          Occupationes remaining : {cards.length}
        </p>
      </div>

      <div className='grid grid-cols-2 gap-6 mb-4'>

        {displayedCards.map((card) => (
          <Card key={card.id} card={card}     className={`cursor-pointer transition-all hover:scale-105 ${
            selectedCard?.id === card.id ? 'ring-2 ring-blue-500' : ''
          }`}
          onClick={() => !isGameOver && handleCardClick(card)}
          />
        ))}
      </div>

        {isGameOver && (
        <div className="text-center">
          <p className="text-xl mb-2">🎉 Congratulations! You&apos;ve completed your career exploration! 🎉</p>
          <p className="mb-4">Final selection: {selectedCard?.name}</p>
          <Button  onClick={resetGame}>Explore Again</Button>
        </div>
      )}

    </div>
  )
}

export default ChooseCard ;
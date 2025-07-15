import React, { useState, useEffect } from 'react';
import './css/Day6.css';

const cardsArray = [
    { id: 1, symbol: '🐶' },
    { id: 2, symbol: '🐱' },
    { id: 3, symbol: '🐶' },
    { id: 4, symbol: '🐱' },
    { id: 5, symbol: '🐵' },
    { id: 6, symbol: '🐵' },
];

export default function Day6() {
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);
    const [disabled, setDisabled] = useState(false);
    const [turns, setTurns] = useState(0);
    const [showCongrats, setShowCongrats] = useState(false);

    const handleClick = (index) => {
        if (disabled) return;
        if (flippedCards.includes(index) || matchedCards.includes(index)) return;

        const newFlipped = [...flippedCards, index];
        setFlippedCards(newFlipped);

        if (newFlipped.length === 2) {
            setDisabled(true);
            setTurns(prev => prev + 1);
            const [firstIndex, secondIndex] = newFlipped;
            const firstCard = cardsArray[firstIndex];
            const secondCard = cardsArray[secondIndex];

            if (firstCard.symbol === secondCard.symbol) {
                setMatchedCards(prev => [...prev, firstIndex, secondIndex]);
                setTimeout(() => {
                    setFlippedCards([]);
                    setDisabled(false);
                }, 1000);
            } else {
                setTimeout(() => {
                    setFlippedCards([]);
                    setDisabled(false);
                }, 3000);
            }
        }
    };

    useEffect(() => {
        if (matchedCards.length === cardsArray.length && cardsArray.length > 0) {
            setTimeout(() => {
                setShowCongrats(true);
            }, 500);
        }
    }, [matchedCards]);

    return (
        <div className="game-container">
            <h1>🧠 Memory Game </h1>
            <h2>Turns: {turns}</h2>

            <div className="card-grid">
                {cardsArray.map((card, index) => {
                    const isFlipped = flippedCards.includes(index) || matchedCards.includes(index);

                    return (
                        <button
                            key={card.id + '-' + index}
                            className={`card-button ${isFlipped ? 'flipped' : ''}`}
                            onClick={() => handleClick(index)}
                            disabled={isFlipped || disabled}
                        >
                            {isFlipped ? card.symbol : 'Flip'}
                        </button>
                    );
                })}
            </div>

            {showCongrats && <h3 className="congrats">🎉 Congratulations! You matched all pairs in {turns} turns!</h3>}
        </div>
    );
}

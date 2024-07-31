'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

let interval: any;

type Card = {
  id: number;
  name: string;
  designation: string;
  content: string;
  gradientFrom: string;
  gradientTo: string;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop()!);
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="flex justify-center items-center animate">
      <div className="relative h-60 w-60 md:h-60 md:w-96 mt-10">
        {cards.map((card, index) => {
          return (
            <motion.div
              key={card.id}
              className="absolute h-60 w-60 md:h-60 md:w-96 rounded-lg p-4 shadow-xl flex flex-col justify-between bg-white dark:bg-[#18181b] border-2"
              style={{
                transformOrigin: 'top center',
                borderImage: `linear-gradient(to bottom, ${card.gradientFrom}, ${card.gradientTo}) 1`,
                borderWidth: '2px',
              }}
              animate={{
                top: index * -CARD_OFFSET,
                scale: 1 - index * SCALE_FACTOR,
                zIndex: cards.length - index,
              }}
            >
              <div className="font-normal text-neutral-700 dark:text-neutral-200">
                {card.content}
              </div>
              <div>
                <p className="text-neutral-500 font-medium dark:text-white">
                  {card.name}
                </p>
                <p className="text-neutral-400 font-normal dark:text-neutral-200">
                  {card.designation}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

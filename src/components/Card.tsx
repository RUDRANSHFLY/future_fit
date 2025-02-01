import React from "react";
import Image from "next/image";
import { OccupationType } from "./ChooseCard";

interface CardProps {
  card : OccupationType;
  onClick : (card : OccupationType) => void;
  className?: string;
}

const Card = ({ card , onClick , className }: CardProps) => {
  return (
    <div className={`h-96 w-64 bg-slate-300 text-black border border-black rounded-lg cursor-pointer ${className}`}>
      <div className={"h-80 w-64 relative"}>
        <Image src={card.image} alt={card.name} fill onClick={() => onClick(card)} sizes={"width : 100vw , height : 100vh"} />
      </div>

      <p className={"text-center mt-5 text-xl"}>{card.name}</p>
    </div>
  );
};

export default Card;
import { useState } from "react";

import { Blur, ImgCard } from "./CardStyle";

import { Photos } from "../../shared";

export const Card = ({ photos }: { photos: Photos }) => {
   const [activeIndex, setActiveIndex] = useState<number | null>(null);
   return (
      <>
         {photos.map(({ full, thumb }, key) => {
            const isActive = activeIndex === key;
            return (
               <ImgCard
                  key={key}
                  $bgimg={isActive ? full : thumb}
                  $active={isActive}
                  onClick={() => setActiveIndex(isActive ? null : key)}
               ></ImgCard>
            );
         })}
         {activeIndex !== null && <Blur onClick={() => setActiveIndex(null)} />}
      </>
   );
};

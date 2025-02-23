import { useState } from "react";

import { Blur, ImgCard } from "./CardStyle";

import { Photos } from "../../shared/types";

export const Card = ({ photos }: { photos: Photos }) => {
   const [activeIndex, setActiveIndex] = useState<number | null>(null);
   return (
      <>
         {photos.map(({ full, thumb }, key) => (
            <ImgCard
               key={key}
               $bgimg={activeIndex === key ? full : thumb}
               $active={activeIndex === key}
               onClick={() => setActiveIndex(activeIndex === key ? null : key)}
            ></ImgCard>
         ))}
         {activeIndex !== null && <Blur onClick={() => setActiveIndex(null)} />}
      </>
   );
};

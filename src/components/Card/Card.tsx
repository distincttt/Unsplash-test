import { useState } from "react";

import { Blur, ImgCard } from "./CardStyle";

export const Card = ({ photos }) => {
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

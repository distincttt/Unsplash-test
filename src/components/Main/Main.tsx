import { Card } from "../Card";

import { useAppSelector, useSearchMore } from "../../shared";

import { CardsWrapper, Error, Loader, MainButton, MainWrapper } from "./MainStyle";

export const Main = () => {
   const { photos, error, loading } = useAppSelector((state) => state.photoSlice);
   const onClick = useSearchMore();
   console.log(photos);
   return (
      <MainWrapper $p={photos.length ? "12rem 8rem" : "1.6rem 8rem"}>
         {photos.map((photoRaw, key) => (
            <CardsWrapper key={key}>
               <Card photos={photoRaw} />
            </CardsWrapper>
         ))}
         {loading && <Loader $mt={photos.length ? "0" : "10rem"} />}
         <Error $mt={photos.length ? "0" : "10rem"}>{error}</Error>
         {photos[0] && <MainButton onClick={onClick}>Показать ещё</MainButton>}
      </MainWrapper>
   );
};

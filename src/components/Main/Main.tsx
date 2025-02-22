import { Card } from "../Card";

import { useAppSelector, useSearchMore } from "../../shared";

import { CardsWrapper, Loader, MainButton, MainWrapper } from "./MainStyle";

export const Main = () => {
   const { photos, error, loading } = useAppSelector((state) => state.photoSlice);
   const onClick = useSearchMore();
   return (
      <MainWrapper $p={photos.length ? "12rem 8rem" : "1.6rem 8rem"}>
         {error ? (
            error
         ) : (
            <>
               {photos.map((photoRaw, key) => (
                  <CardsWrapper key={key}>
                     <Card photos={photoRaw} />
                  </CardsWrapper>
               ))}
               {loading && <Loader />}
               {photos[0] && <MainButton onClick={onClick}>Показать ещё</MainButton>}
            </>
         )}
      </MainWrapper>
   );
};

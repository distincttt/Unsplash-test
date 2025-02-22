import { useAppDispatch, useAppSelector } from "./redux-hooks";

import { fetchPhotos } from "../../redux/photoSlice";

export const useSearchMore = (): ((e: React.MouseEvent<HTMLButtonElement>) => void) => {
   const dispatch = useAppDispatch();
   const { query, page } = useAppSelector((state) => state.photoSlice);

   const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      dispatch(fetchPhotos({ query: query, page: page, firstLoad: false }));
   };

   return onClick;
};

import { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "./redux-hooks";

import { fetchPhotos, saveQuery } from "../../redux/photoSlice";

export const useSearch = (): {
   newQuery: string;
   handleChange: React.ChangeEventHandler<HTMLInputElement>;
   onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
   clearQuery: () => void;
} => {
   const { query } = useAppSelector((state) => state.photoSlice);
   const [newQuery, setNewQuery] = useState(query);
   const dispatch = useAppDispatch();

   useEffect(() => {
      setNewQuery(query);
   }, [query]);

   const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      setNewQuery(e.target.value);
   };
   const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (newQuery) {
         dispatch(saveQuery(newQuery));
         dispatch(fetchPhotos({ query: newQuery, page: 1, firstLoad: true }));
      }
   };

   const clearQuery = () => {
      setNewQuery(""); // Очищаем локальное состояние
   };

   return { newQuery, handleChange, onClick, clearQuery };
};

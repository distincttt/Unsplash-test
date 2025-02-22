import { Header } from "../Header";
import { Main } from "../Main";
import { Search } from "../Search";

import { useAppSelector } from "../../shared";

export const App = () => {
   const { query } = useAppSelector((state) => state.photoSlice);
   return (
      <>
         {query !== undefined ? <Header /> : <Search />}
         <Main />
      </>
   );
};

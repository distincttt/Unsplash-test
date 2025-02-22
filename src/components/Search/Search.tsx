import {
   SearchButton,
   SearchInput,
   SearchWrapper,
   SearchIconSearch,
   SearchIconClose,
   SearchButtonClose,
} from "./SearchStyle";

import { useSearch } from "../../shared";

import SearchIcon from "../../../public/icons/search-icon.svg";
import CloseIcon from "../../../public/icons/close-icon.svg";

export const Search = ({ isHeader }) => {
   const [newQuery, handleChange, onClick, clearQuery] = useSearch();
   return (
      <SearchWrapper $m={isHeader ? "0" : "30rem auto 0 auto"}>
         <SearchIconSearch src={SearchIcon} />
         <SearchInput
            type="text"
            placeholder="Телефоны, яблоки, груши..."
            onChange={handleChange}
            value={newQuery}
         ></SearchInput>
         <SearchButtonClose onClick={clearQuery}>
            <SearchIconClose src={CloseIcon} />
         </SearchButtonClose>
         <SearchButton onClick={onClick}>Искать</SearchButton>
      </SearchWrapper>
   );
};

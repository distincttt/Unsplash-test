import { Search } from "../Search";

import { HeaderWrapper } from "./HeaderStyle";

export const Header = () => {
   return (
      <HeaderWrapper>
         <Search isHeader={true} />
      </HeaderWrapper>
   );
};

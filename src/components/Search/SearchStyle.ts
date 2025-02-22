import styled from "styled-components";

export const SearchWrapper = styled.div<{ $m: string }>`
   margin: ${({ $m }) => $m};
   max-width: 51rem;
   height: 5.2rem;
   display: flex;
   gap: 0.6rem;
   position: relative;
`;

export const SearchInput = styled.input`
   width: 100%;
   height: 100%;
   border: none;
   outline: none;
   background: var(--gray-bg);
   padding-left: 3rem;
   border-radius: 1.2rem;
   font-size: 16px;
   font-weight: 400;

   &:hover {
      background: var(--dark-gray-bg);
   }

   &::placeholder {
      color: var(--dark-gray-cl);
   }

   @media screen and (max-width: 550px) {
      &::placeholder {
         color: var(--gray-bg);
      }
   }
`;

export const SearchIconSearch = styled.img.attrs<{ src: string }>(({ src }) => ({
   src: src,
}))`
   position: absolute;
   top: 1.8rem;
   left: 0.6rem;
`;

export const SearchIconClose = styled.img.attrs<{ src: string }>(({ src }) => ({
   src: src,
}))`
   position: absolute;
   top: 1.8rem;

   &:hover {
      ${SearchInput} {
         background: var(--dark-gray-bg);
      }
   }
`;

export const SearchButtonClose = styled.button`
   position: absolute;
   right: 10.5rem;
   border: none;
   background: transparent;
   display: flex;
   justify-content: center;
   border-radius: 1.2rem;
   cursor: pointer;
`;

export const SearchButton = styled.button`
   max-width: 8.4rem;
   width: 100%;
   height: 100%;
   border: none;
   border-radius: 12px;
   background: var(--red-bg);
   color: #fff;
   cursor: pointer;

   &:hover {
      background: var(--dark-red-bg);
   }
`;

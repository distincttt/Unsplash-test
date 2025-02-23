import styled from "styled-components";

export const CardsWrapper = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   gap: 0.8rem;
   padding: 0.4rem;
`;

export const MainWrapper = styled.main<{ $p: string }>`
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 1rem;
   padding: ${({ $p }) => $p};
   font-weight: 400;
   font-size: 1.4rem;
   @media screen and (max-width: 550px) {
      padding: 12rem 0;
   }
`;

export const MainButton = styled.button`
   max-width: 20rem;
   width: 100%;
   height: 5.2rem;
   border: 2px solid var(--red-bg);
   border-radius: 12px;
   background: var(--gray-bg);
   cursor: pointer;

   &:hover {
      background: var(--dark-red-bg);
   }
`;

export const Loader = styled.span<{ $mt: string }>`
   width: 48px;
   height: 48px;
   border-radius: 50%;
   position: relative;
   animation: rotate 1s linear infinite;
   margin-top: ${({ $mt }) => $mt};

   &::before,
   &::after {
      content: "";
      box-sizing: border-box;
      position: absolute;
      inset: 0px;
      border-radius: 50%;
      border: 5px solid var(--dark-gray-bg);
      animation: prixClipFix 2s linear infinite;
   }

   &::after {
      border-color: var(--red-bg);
      animation: prixClipFix 2s linear infinite, rotate 0.5s linear infinite reverse;
      inset: 6px;
   }
`;

export const Error = styled.span<{ $mt: string }>`
   margin-top: ${({ $mt }) => $mt};
`;

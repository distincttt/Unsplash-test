import styled from "styled-components";

export const ImgCard = styled.div<{ $bgimg: string; $active: boolean }>`
   background: url(${({ $bgimg }) => $bgimg});
   background-repeat: no-repeat;
   background-size: cover;
   background-position-x: 50%;
   background-position-y: 50%;
   border-radius: 0.4rem;
   border: 1px solid var(--white-gray-bg);
   cursor: pointer;
   position: ${({ $active }) => ($active ? "fixed" : "static")};
   top: 10dvh;
   left: 10dvh;
   height: ${({ $active }) => ($active ? "75dvh" : "20.4rem")};
   width: ${({ $active }) => ($active ? "75dvw" : "100%")};
   z-index: ${({ $active }) => ($active ? "2" : "0")};
`;

export const Blur = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background: rgba(0, 0, 0, 0.3);
   z-index: 1;
`;

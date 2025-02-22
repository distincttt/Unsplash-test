import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
    --gray-bg: #EEEEEE;
    --dark-gray-bg: #E6E6E6;
    --white-gray-bg: #EBEBEB;
    --dark-gray-cl: #9C9C9C;
    --red-bg:#EB0C0C;
    --dark-red-bg:#C30000;
}

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family: "Poppins", sans-serif;
}

html {
    font-size:62.5%
}

@media screen and (max-width: 550px) {
    body{
        padding: 1rem;
    }
}

@keyframes rotate {
   0%   {transform: rotate(0deg)}
   100%   {transform: rotate(360deg)}
 }

 @keyframes prixClipFix {
     0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
     25%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
     50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
     75%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)}
     100% {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)}
 }
`;

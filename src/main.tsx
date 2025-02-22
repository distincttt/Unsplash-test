import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux";

import { App } from "./components";

import { GlobalStyle } from "./globalStyle";

createRoot(document.getElementById("root")!).render(
   <Provider store={store}>
      <StrictMode>
         <GlobalStyle />
         <App />
      </StrictMode>
   </Provider>
);

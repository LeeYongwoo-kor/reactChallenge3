import React from "react";
import ReactDOM from "react-dom";
import { QueryClient } from "react-query";
import { RecoilRoot } from "recoil";
import App from "./App";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);

import ReactDOM from "react-dom/client";
import "./style/index.scss";
import "./style/reset.css";
import "./style/icon.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/state";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

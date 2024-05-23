import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Myprovider } from "./context/Mycontext.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <Myprovider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Myprovider>
  </ChakraProvider>
);

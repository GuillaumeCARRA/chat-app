import { useContext } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"; 
import { AuthContext } from "./context/AuthContext";

import Home from "../src/components/Home";
import Login from "../src/components/Login";
import Register from "../src/components/Register";

import './App.css';



function App() {

  const {currUser} = useContext(AuthContext);

  console.log('user in app', currUser);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/">
            <Route index element={<Home />}/>
            <Route path="login" element={<Login />}/>
            <Route path="register" element={<Register />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

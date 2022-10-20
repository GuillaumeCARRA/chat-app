import Home from "../src/components/Home";
import Login from "../src/components/Login";
import Register from "../src/components/Register";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"; 

import './App.css';

function App() {
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

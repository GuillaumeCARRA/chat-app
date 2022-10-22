import { useContext } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom"; 
import { AuthContext } from "./context/AuthContext";

import Home from "../src/components/Home";
import Login from "../src/components/Login";
import Register from "../src/components/Register";

import './App.css';



function App() {

  const {currUser} = useContext(AuthContext);
  console.log('user in app', currUser);

  // we create a protected route
  // for checked if an user is connected or not
  const ProtectedRoute = ({children}) => {
    if(!currUser) {
      return <Navigate to="/login"/>
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/">
            <Route 
              index 
              element={ 
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
              } 
            />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

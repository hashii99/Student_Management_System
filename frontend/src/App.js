import React from 'react';
// import { Route } from 'react-router-dom';
import  Home  from "./pages/home";
import Add from "./pages/add";
import Update from "./pages/update";
import Delete from "./pages/delete";
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
      // <Home />
      <>
        <BrowserRouter>
          <Routes>

            <Route 
              exact
              path="/"
              element={ <Home />}
            />

            <Route 
              exact
              path="/add"
              element={ <Add />}
            />

            <Route 
              exact
              path="/update"
              element={ <Update />}
            />

            <Route 
              exact
              path="/delete"
              element={ <Delete />}
            />

          </Routes>
        </BrowserRouter>
      </>
    
  );
}

export default App;

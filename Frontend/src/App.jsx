import Login from "./components/Login";
import Signin from "./components/Signin";
import Landing from "./components/Landing"
import { BrowserRouter,Routes,Route, Link} from "react-router-dom";
import { useState } from "react";

function App()
{
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path="/signin" element={<Signin/>}></Route>
            <Route path="/landing" element={<Landing/>}></Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default App;
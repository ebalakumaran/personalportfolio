import React from "react";
import Home from './Home'
import Commscope from './components/commscope/commscope'
import Edusera from './components/edusera/edusera'
import Devtown from './components/devtown/devtown'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
function App(){
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/commscope" element={<Commscope/>}/>
                <Route exact path="/edusera" element={<Edusera/>}/>
                <Route exact path="/devtown" element={<Devtown/>}/>
            </Routes>
        </Router>
    )
}

export default App;
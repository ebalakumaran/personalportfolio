import React from "react";
import Home from './Home'
import Commscope from './components/commscope/commscope'
import Edusera from './components/edusera/edusera'
import Devtown from './components/devtown/devtown'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
function App(){
    return (
        <Router basename="/personalportfolio">
            <Routes>
                <Route exact path="/personalportfolio" element={<Home/>}/>
                <Route path="/commscope" element={<Commscope/>}/>
                <Route path="/edusera" element={<Edusera/>}/>
                <Route path="/devtown" element={<Devtown/>}/>
            </Routes>
        </Router>
    )
}

export default App;
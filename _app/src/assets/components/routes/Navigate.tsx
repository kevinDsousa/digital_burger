import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Cardapio from '../pages/Cardapio'
import QuemSomos from '../pages/QuemSomos'
import Login from '../pages/Login'
import Admin from '../pages/Admin'

export default function Navigate() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Cardapio/>}/>
                <Route path="/quemsomos" element={<QuemSomos/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/admin" element={<Admin/>}/>
            </Routes>
        </Router>
    )
}
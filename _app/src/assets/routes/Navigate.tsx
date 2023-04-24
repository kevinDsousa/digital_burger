import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Cardapio from '../components/pages/Cardapio'
import QuemSomos from '../components/pages/QuemSomos'
import Login from '../components/pages/Login'
import Admin from '../components/pages/Admin'

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
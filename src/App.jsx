import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ConversorMoedas from './pages/ConversorMoedas';
import "./context/i18n.jsx";


export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<ConversorMoedas />} />
        </Routes>
    );
}

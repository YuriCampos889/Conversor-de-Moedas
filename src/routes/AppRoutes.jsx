import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ConversorMoedas from './pages/ConversorMoedas';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<ConversorMoedas />} />
        </Routes>
    );
}

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage/MainPage';
import HelpPage from './HelpPage/HelpPage';
import PreventPage from './PreventPage/PreventPage';
import Checking from './PreventPage/components/Checking';
import ActionTips from './PreventPage/components/ActionTips';
import EmergencySupplies from './PreventPage/components/EmergencySupplies';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/help' element={<HelpPage />} />
        <Route path='/prevent' element={<PreventPage />} />
        <Route path='/emergencysupplies' element={<EmergencySupplies />} />
        <Route path='/checking' element={<Checking />} />
        <Route path='/action' element={<ActionTips />} />
      </Routes>
    </BrowserRouter>
  );
}

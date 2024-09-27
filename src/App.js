import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MemberList from './MemberList';
import MemberDetail from './MemberDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MemberList />} />
        <Route path="/member/:id" element={<MemberDetail />} />
      </Routes>
    </Router>
  );
}

export default App;

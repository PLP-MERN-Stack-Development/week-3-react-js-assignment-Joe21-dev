import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Tasks from './pages/Tasks.jsx';
import ApiData from './pages/ApiData.jsx';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/api" element={<ApiData />} />
      </Routes>
    </Layout>
  );
}
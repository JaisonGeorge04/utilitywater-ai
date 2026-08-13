import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

const Home = lazy(() => import('./pages/Home'));
const AIFunctions = lazy(() => import('./pages/AIFunctions'));
const IoTSoftware = lazy(() => import('./pages/IoTSoftware'));
const HardwareTechnologies = lazy(() => import('./pages/HardwareTechnologies'));
const Integration = lazy(() => import('./pages/Integration'));
const Applications = lazy(() => import('./pages/Applications'));
const Resources = lazy(() => import('./pages/Resources'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

export default function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ai-functions-water-treatment-distribution" element={<AIFunctions />} />
            <Route path="/iot-software-water-treatment-distribution" element={<IoTSoftware />} />
            <Route path="/ai-iot-hardware-water-treatment-operations" element={<HardwareTechnologies />} />
            <Route path="/integration-water-treatment-distribution" element={<Integration />} />
            <Route path="/applications-water-treatment-distribution" element={<Applications />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

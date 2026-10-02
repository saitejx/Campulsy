import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Placeholder from './pages/Placeholder';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Placeholder title="Projects" />} />
          <Route path="hackathons" element={<Placeholder title="Hackathons" />} />
          <Route path="events" element={<Placeholder title="Events" />} />
          <Route path="clubs" element={<Placeholder title="Clubs" />} />
          <Route path="resources" element={<Placeholder title="Resources" />} />
          <Route path="internships" element={<Placeholder title="Internships" />} />
          <Route path="notes" element={<Placeholder title="Notes" />} />
          <Route path="open-source" element={<Placeholder title="Open Source" />} />
          <Route path="discussions" element={<Placeholder title="Discussions" />} />
          <Route path="profile" element={<Placeholder title="Student Profile" />} />
          <Route path="about" element={<Placeholder title="About" />} />
          <Route path="*" element={<Placeholder title="Page Not Found" />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

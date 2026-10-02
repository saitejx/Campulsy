import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function MainLayout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flex: 1, paddingBottom: '4rem' }}>
        <Outlet />
      </main>
      <footer style={{ borderTop: '1px solid var(--border)', padding: '2rem 0', backgroundColor: 'var(--surface)', color: 'var(--text-muted)' }}>
        <div className="container flex justify-between items-center" style={{ flexDirection: 'row', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <p style={{ fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.25rem' }}>StudentPlatform</p>
            <p className="text-sm">Built for students, by students. Open source community platform.</p>
          </div>
          <div className="flex gap-4 text-sm">
            <a href="https://github.com" target="_blank" rel="noreferrer" style={{ transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-main)'} onMouseOut={(e) => e.currentTarget.style.color = 'inherit'}>GitHub</a>
            <a href="#" style={{ transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-main)'} onMouseOut={(e) => e.currentTarget.style.color = 'inherit'}>Twitter</a>
            <a href="#" style={{ transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-main)'} onMouseOut={(e) => e.currentTarget.style.color = 'inherit'}>Discord</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

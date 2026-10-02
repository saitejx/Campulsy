import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, User, Menu, X, Code2 } from 'lucide-react';

const navLinks = [
  { name: 'Projects', path: '/projects' },
  { name: 'Hackathons', path: '/hackathons' },
  { name: 'Events', path: '/events' },
  { name: 'Clubs', path: '/clubs' },
  { name: 'Resources', path: '/resources' },
  { name: 'Internships', path: '/internships' },
  { name: 'Open Source', path: '/open-source' },
  { name: 'Discussions', path: '/discussions' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header style={{ borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-color)', position: 'sticky', top: 0, zIndex: 50 }}>
      <div className="container" style={{ height: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Logo & Desktop Nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, fontSize: '1.25rem', color: 'var(--text-main)' }}>
            <div style={{ backgroundColor: 'var(--primary)', padding: '0.375rem', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Code2 size={20} color="white" />
            </div>
            StudentPlatform
          </Link>
          
          <nav style={{ display: 'none' }} className="desktop-nav">
            <style>
              {`
                @media (min-width: 1024px) {
                  .desktop-nav { display: flex !important; gap: 1.5rem; align-items: center; }
                }
              `}
            </style>
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                style={{ 
                  fontSize: '0.875rem', 
                  fontWeight: 500,
                  color: location.pathname === link.path ? 'var(--text-main)' : 'var(--text-muted)',
                  transition: 'color 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-main)'}
                onMouseOut={(e) => e.currentTarget.style.color = location.pathname === link.path ? 'var(--text-main)' : 'var(--text-muted)'}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Search & Profile (Desktop) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ display: 'none', position: 'relative' }} className="desktop-search">
            <style>
              {`
                @media (min-width: 768px) {
                  .desktop-search { display: block !important; }
                }
              `}
            </style>
            <Search size={16} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input 
              type="text" 
              placeholder="Search..." 
              style={{
                backgroundColor: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '9999px',
                padding: '0.375rem 1rem 0.375rem 2.25rem',
                color: 'var(--text-main)',
                fontSize: '0.875rem',
                outline: 'none',
                width: '200px'
              }}
            />
          </div>
          
          <Link to="/profile" className="btn btn-outline" style={{ display: 'none' }} id="profile-btn">
            <User size={16} /> Profile
          </Link>
          <style>
            {`
              @media (min-width: 768px) {
                #profile-btn { display: inline-flex !important; }
              }
            `}
          </style>
          
          <button 
            className="mobile-menu-btn"
            style={{ display: 'flex', color: 'var(--text-main)' }} 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <style>
              {`
                @media (min-width: 1024px) {
                  .mobile-menu-btn { display: none !important; }
                }
              `}
            </style>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div style={{ padding: '1rem', backgroundColor: 'var(--surface)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
             {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  style={{ 
                    fontSize: '1rem', 
                    fontWeight: 500,
                    color: location.pathname === link.path ? 'var(--primary)' : 'var(--text-main)',
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div style={{ height: '1px', backgroundColor: 'var(--border)', margin: '0.5rem 0' }}></div>
              <Link to="/profile" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500 }} onClick={() => setMobileMenuOpen(false)}>
                <User size={18} /> Profile
              </Link>
          </div>
        </div>
      )}
    </header>
  );
}

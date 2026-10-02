import React from 'react';

export default function Placeholder({ title }) {
  return (
    <div className="container py-16 text-center">
      <h1 className="h1 mb-4">{title}</h1>
      <p className="text-muted mb-8 text-lg">
        This page is currently under development. Check back later!
      </p>
      <div className="flex justify-center">
        <div className="card" style={{ maxWidth: '400px', width: '100%' }}>
          <p className="text-sm text-muted">
            Want to contribute? Connect with us on GitHub and help build the {title.toLowerCase()} feature.
          </p>
        </div>
      </div>
    </div>
  );
}

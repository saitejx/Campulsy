import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, GitFork, Code, Terminal, Calendar, Users, Briefcase, BookOpen, FileText, GitPullRequest } from 'lucide-react';
import { mockProjects, mockCategories } from '../data/mockData';

const iconMap = {
  Code: <Code size={24} />,
  Terminal: <Terminal size={24} />,
  Calendar: <Calendar size={24} />,
  Users: <Users size={24} />,
  Briefcase: <Briefcase size={24} />,
  BookOpen: <BookOpen size={24} />,
  FileText: <FileText size={24} />,
  GitPullRequest: <GitPullRequest size={24} />
};

export default function Home() {
  return (
    <div className="container">
      {/* Hero Section */}
      <section className="py-16 mt-8 mb-8" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <h1 className="h1 mb-6">Build. Learn. Connect.</h1>
        <p className="text-muted mb-8" style={{ fontSize: '1.25rem' }}>
          A community for students to discover opportunities, work on projects, join communities, and contribute to open source.
        </p>
        <div className="flex gap-4 justify-center" style={{ flexWrap: 'wrap' }}>
          <Link to="/projects" className="btn btn-primary" style={{ padding: '0.75rem 1.5rem', fontSize: '1rem' }}>
            Explore Projects
          </Link>
          <Link to="/resources" className="btn btn-outline" style={{ padding: '0.75rem 1.5rem', fontSize: '1rem' }}>
            Find Opportunities
          </Link>
        </div>
      </section>

      {/* Explore Categories */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="h2">Explore</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {mockCategories.map((category) => (
            <Link key={category.title} to={category.path} className="card flex-col items-center justify-center gap-2" style={{ textAlign: 'center', padding: '2rem 1rem' }}>
              <div style={{ color: `var(--accent-${category.color})`, marginBottom: '0.5rem' }}>
                {iconMap[category.icon]}
              </div>
              <h3 className="h3" style={{ fontSize: '1rem' }}>{category.title}</h3>
              <span className="text-sm text-muted">{category.count} items</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="h2">Featured Projects</h2>
          <Link to="/projects" className="btn btn-outline">
            View All <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockProjects.slice(0, 6).map((project) => (
            <div key={project.id} className="card flex-col justify-between" style={{ display: 'flex' }}>
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="h3" style={{ fontSize: '1.125rem' }}>{project.title}</h3>
                  <span className={`badge ${project.difficulty === 'Beginner' ? 'green' : project.difficulty === 'Intermediate' ? 'blue' : 'purple'}`}>
                    {project.difficulty}
                  </span>
                </div>
                <p className="text-muted text-sm mb-4" style={{ minHeight: '3rem' }}>{project.description}</p>
                <div className="flex gap-2 mb-4" style={{ flexWrap: 'wrap' }}>
                  {project.technologies.map(tech => (
                    <span key={tech} className="badge" style={{ backgroundColor: 'var(--bg-color)' }}>{tech}</span>
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-center mt-4 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                <span className="text-sm text-muted flex items-center gap-1">
                  <Users size={14} /> {project.contributors} contributors
                </span>
                <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ padding: '0.375rem 0.75rem' }}>
                  <GitFork size={16} /> GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

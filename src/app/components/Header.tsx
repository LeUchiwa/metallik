import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';
import logo from '@/imports/metal.png';

const skills = [
  'Constructions métalliques',
  'Chaudronnerie',
  'Prestations de services',
  'Tuyauterie',
  'Serrurerie',
];

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/services', label: 'Services' },
    { path: '/realisations', label: 'Réalisations' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo + Skills */}
          <Link to="/" className="flex items-center gap-5">
            <motion.img
              src={logo}
              alt="METALLIK"
              className="h-16 flex-shrink-0"
              animate={{
                filter: [
                  'drop-shadow(0 0 2px rgba(139, 0, 0, 0.35))',
                  'drop-shadow(0 0 8px rgba(220, 60, 0, 0.75)) drop-shadow(0 0 14px rgba(255, 140, 0, 0.45))',
                  'drop-shadow(0 0 18px rgba(255, 180, 0, 0.95)) drop-shadow(0 0 28px rgba(220, 60, 0, 0.7))',
                  'drop-shadow(0 0 8px rgba(220, 60, 0, 0.75)) drop-shadow(0 0 14px rgba(255, 140, 0, 0.45))',
                  'drop-shadow(0 0 2px rgba(139, 0, 0, 0.35))',
                ],
              }}
              transition={{
                duration: 1.8,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatDelay: 2.5,
              }}
            />
            {/* Skills list */}
            <div className="hidden lg:flex flex-col justify-center border-l border-border pl-5 gap-0.5">
              {skills.map((skill, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-xs text-muted-foreground leading-tight whitespace-nowrap">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors ${
                  isActive(link.path)
                    ? 'text-primary'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 px-4 rounded transition-colors ${
                  isActive(link.path)
                    ? 'bg-primary text-white'
                    : 'text-foreground hover:bg-muted'
                }`}
              >
                {link.label}
              </Link>
            ))}
            {/* Skills on mobile */}
            <div className="px-4 pt-2 border-t border-border mt-2">
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <span key={i} className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

'use client';

import { useTheme, themes } from '@/lib/hooks/useTheme';
import { useScroll } from '@/lib/hooks/useScroll';
import { scrollToSection } from '@/lib/utils/scroll';
import { Icon } from '@iconify-icon/react';
import { motion, AnimatePresence } from 'framer-motion';

export function AppBar() {
  const { theme, setTheme } = useTheme();
  const { direction, isAtTop } = useScroll();

  const toggleTheme = () => {
    const currentIndex = themes.findIndex(t => t.value === theme.value);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  const navItems = [
    { href: '#hero', label: 'Home' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#technologies', label: 'Technologies' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <AnimatePresence>
      <motion.div
        className={`navbar fixed top-0 z-50 transition-colors ${
          isAtTop ? 'bg-transparent' : 'bg-base-100/50 backdrop-blur shadow-lg'
        }`}
        initial={{ y: -100 }}
        animate={{ y: direction === 'down' && !isAtTop ? -100 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <Icon icon="mdi:menu" className="h-5 w-5" />
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href.slice(1));
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }}
            className="btn btn-ghost text-xl"
          >
            Portfolio
          </a>
        </div>
        
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href.slice(1));
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="navbar-end">
          <button
            className="btn btn-square btn-ghost"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <Icon
              icon={theme.value === 'light' ? 'ph:moon-bold' : 'ph:sun-bold'}
              className="h-5 w-5"
            />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
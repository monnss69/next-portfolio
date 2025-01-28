'use client';

import { socialLinks } from '@/data/portfolio';
import { Icon } from '@iconify-icon/react';

export function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content">
      <div>
        <div className="grid grid-flow-col gap-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label={link.name}
            >
              <Icon icon={link.icon} className="text-2xl" />
            </a>
          ))}
        </div>
      </div>
      <div>
        <p>
          Copyright © {new Date().getFullYear()} - All rights reserved
        </p>
      </div>
    </footer>
  );
}
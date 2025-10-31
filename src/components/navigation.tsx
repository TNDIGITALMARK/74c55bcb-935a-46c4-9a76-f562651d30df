'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { artistInfo } from '@/lib/artwork-data';

export function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-white border-b border-[hsl(var(--border))] sticky top-0 z-50">
      <div className="container-artist">
        <div className="flex items-center justify-between h-16">
          {/* Brand Name */}
          <Link href="/" className="brand-name hover:opacity-70 transition-opacity">
            {artistInfo.name}
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors hover:text-[hsl(var(--accent))] ${
                isActive('/') ? 'text-[hsl(var(--foreground))]' : 'text-[hsl(var(--muted-foreground))]'
              }`}
            >
              Work
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium transition-colors hover:text-[hsl(var(--accent))] ${
                isActive('/about') ? 'text-[hsl(var(--foreground))]' : 'text-[hsl(var(--muted-foreground))]'
              }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-medium transition-colors hover:text-[hsl(var(--accent))] ${
                isActive('/contact') ? 'text-[hsl(var(--foreground))]' : 'text-[hsl(var(--muted-foreground))]'
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

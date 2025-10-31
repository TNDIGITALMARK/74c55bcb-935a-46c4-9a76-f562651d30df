import Link from 'next/link';
import { artistInfo } from '@/lib/artwork-data';
import { Instagram, Twitter, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-[hsl(var(--border))] mt-auto">
      <div className="container-artist py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand and Tagline */}
          <div>
            <div className="brand-name mb-2">{artistInfo.name}</div>
            <p className="caption">{artistInfo.tagline}</p>
          </div>

          {/* Contact Info */}
          <div>
            <h6 className="section-label mb-4">CONTACT</h6>
            <div className="space-y-2">
              <p className="caption">{artistInfo.location}</p>
              <p className="caption">
                <a href={`mailto:${artistInfo.email}`} className="hover:text-[hsl(var(--accent))] transition-colors">
                  {artistInfo.email}
                </a>
              </p>
              <p className="caption">{artistInfo.phone}</p>
            </div>
          </div>

          {/* Social Media & CTA */}
          <div>
            <h6 className="section-label mb-4">FOLLOW</h6>
            <div className="flex gap-4 mb-4">
              <a
                href={artistInfo.socialMedia.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--accent))] transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href={artistInfo.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--accent))] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href={artistInfo.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--accent))] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
            <div className="space-y-2">
              <Link
                href="/contact"
                className="inline-block px-6 py-2 text-sm font-medium bg-[hsl(var(--foreground))] text-white hover:bg-[hsl(var(--accent))] transition-colors rounded"
              >
                GET IN TOUCH
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-[hsl(var(--border))]">
          <p className="caption text-center">
            © {new Date().getFullYear()} {artistInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { artworks } from '@/lib/artwork-data';
import { Camera, Palette, Printer } from 'lucide-react';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/generated/hero-abstract-art.jpg"
            alt="Hero artwork"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="relative h-full flex items-center justify-center text-center">
          <div className="container-artist px-4">
            <h1 className="text-white mb-4 drop-shadow-lg">
              ELEVATING CREATIVITY
              <br />
              THROUGH VISUAL
              <br />
              STORYTELLING
            </h1>
            <Link
              href="#gallery"
              className="inline-block mt-6 px-8 py-3 text-sm font-medium text-white border-2 border-white hover:bg-white hover:text-black transition-all uppercase tracking-wider"
            >
              EXPLORE WORK
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Gallery Section */}
      <section id="gallery" className="py-16 bg-white">
        <div className="container-artist">
          <h2 className="section-label mb-8 text-center">FEATURED WORKS</h2>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {artworks.slice(0, 4).map((artwork) => (
              <Link
                key={artwork.id}
                href={`/artwork/${artwork.id}`}
                className="group block"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded shadow-artist group-hover:shadow-artist-hover transition-all duration-300">
                  <Image
                    src={artwork.image}
                    alt={artwork.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="mt-3">
                  <p className="caption text-[hsl(var(--muted-foreground))]">
                    {artwork.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Featured Services Section */}
          <h2 className="section-label mb-8 text-center">FEATURED SERVICES</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Commissioned Art */}
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <Palette size={40} strokeWidth={1.5} className="text-[hsl(var(--foreground))]" />
              </div>
              <h3 className="section-label mb-3">COMMISSIONED ART</h3>
              <p className="caption">
                Custom artwork created to your specifications, bringing your vision to life through
                collaborative creative process.
              </p>
            </div>

            {/* Illustration & Design */}
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <Camera size={40} strokeWidth={1.5} className="text-[hsl(var(--foreground))]" />
              </div>
              <h3 className="section-label mb-3">ILLUSTRATION & DESIGN</h3>
              <p className="caption">
                Professional illustration services for editorial, commercial, and personal projects
                across multiple mediums.
              </p>
            </div>

            {/* Fine Art Prints */}
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <Printer size={40} strokeWidth={1.5} className="text-[hsl(var(--foreground))]" />
              </div>
              <h3 className="section-label mb-3">FINE ART PRINTS</h3>
              <p className="caption">
                High-quality archival prints of original works, available in various sizes to suit
                your space and budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[hsl(var(--muted))]">
        <div className="container-artist text-center">
          <h2 className="text-2xl font-semibold mb-4">
            READY TO START YOUR
            <br />
            CREATIVE JOURNEY?
          </h2>
          <p className="caption mb-8 max-w-xl mx-auto">
            Whether you're interested in purchasing original artwork, commissioning a custom piece,
            or discussing collaboration opportunities, I'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-3 text-sm font-medium bg-[hsl(var(--foreground))] text-white hover:bg-[hsl(var(--accent))] transition-colors uppercase tracking-wider"
            >
              VIEW PORTFOLIO
            </Link>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 text-sm font-medium border-2 border-[hsl(var(--foreground))] text-[hsl(var(--foreground))] hover:bg-[hsl(var(--foreground))] hover:text-white transition-colors uppercase tracking-wider"
            >
              GET IN TOUCH
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

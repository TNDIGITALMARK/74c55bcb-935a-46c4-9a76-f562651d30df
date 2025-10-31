'use client';

import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { artworks } from '@/lib/artwork-data';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ArtworkDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const artwork = artworks.find((a) => a.id === id);
  const currentIndex = artworks.findIndex((a) => a.id === id);

  if (!artwork) {
    return (
      <div className="container-artist py-20 text-center">
        <h1 className="text-2xl mb-4">Artwork not found</h1>
        <Link href="/" className="text-[hsl(var(--accent))] hover:underline">
          Return to gallery
        </Link>
      </div>
    );
  }

  const prevArtwork = currentIndex > 0 ? artworks[currentIndex - 1] : null;
  const nextArtwork = currentIndex < artworks.length - 1 ? artworks[currentIndex + 1] : null;

  return (
    <div className="bg-white">
      {/* Artwork Detail Section */}
      <section className="py-16">
        <div className="container-artist">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image */}
            <div className="relative aspect-[3/4] overflow-hidden rounded shadow-artist">
              <Image
                src={artwork.image}
                alt={artwork.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Details */}
            <div className="flex flex-col justify-center">
              <div className="mb-6">
                <Link
                  href="/"
                  className="inline-flex items-center text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--accent))] transition-colors mb-8"
                >
                  <ChevronLeft size={16} className="mr-1" />
                  Back to Gallery
                </Link>
              </div>

              <h1 className="text-3xl font-bold mb-4">{artwork.title}</h1>

              <div className="space-y-3 mb-8">
                <div className="flex border-b border-[hsl(var(--border))] pb-2">
                  <span className="caption font-medium w-32">Medium:</span>
                  <span className="caption">{artwork.medium}</span>
                </div>
                <div className="flex border-b border-[hsl(var(--border))] pb-2">
                  <span className="caption font-medium w-32">Dimensions:</span>
                  <span className="caption">{artwork.dimensions}</span>
                </div>
                <div className="flex border-b border-[hsl(var(--border))] pb-2">
                  <span className="caption font-medium w-32">Year:</span>
                  <span className="caption">{artwork.year}</span>
                </div>
                <div className="flex border-b border-[hsl(var(--border))] pb-2">
                  <span className="caption font-medium w-32">Category:</span>
                  <span className="caption capitalize">{artwork.category.replace('-', ' ')}</span>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="section-label mb-3">ABOUT THIS WORK</h2>
                <p className="text-base leading-relaxed text-[hsl(var(--foreground))]">
                  {artwork.description}
                </p>
              </div>

              <div className="flex gap-4">
                <Link
                  href="/contact"
                  className="inline-block px-8 py-3 text-sm font-medium bg-[hsl(var(--foreground))] text-white hover:bg-[hsl(var(--accent))] transition-colors uppercase tracking-wider"
                >
                  INQUIRE
                </Link>
                <Link
                  href="/contact"
                  className="inline-block px-8 py-3 text-sm font-medium border-2 border-[hsl(var(--foreground))] text-[hsl(var(--foreground))] hover:bg-[hsl(var(--foreground))] hover:text-white transition-colors uppercase tracking-wider"
                >
                  PURCHASE PRINT
                </Link>
              </div>
            </div>
          </div>

          {/* Navigation between artworks */}
          <div className="flex justify-between items-center mt-16 pt-8 border-t border-[hsl(var(--border))]">
            {prevArtwork ? (
              <Link
                href={`/artwork/${prevArtwork.id}`}
                className="group flex items-center text-sm hover:text-[hsl(var(--accent))] transition-colors"
              >
                <ChevronLeft size={16} className="mr-1" />
                <div>
                  <div className="caption text-[hsl(var(--muted-foreground))]">Previous</div>
                  <div className="font-medium">{prevArtwork.title}</div>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextArtwork ? (
              <Link
                href={`/artwork/${nextArtwork.id}`}
                className="group flex items-center text-sm hover:text-[hsl(var(--accent))] transition-colors text-right"
              >
                <div>
                  <div className="caption text-[hsl(var(--muted-foreground))]">Next</div>
                  <div className="font-medium">{nextArtwork.title}</div>
                </div>
                <ChevronRight size={16} className="ml-1" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      {/* Related Works */}
      <section className="py-16 bg-[hsl(var(--muted))]">
        <div className="container-artist">
          <h2 className="section-label mb-8 text-center">MORE WORKS</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {artworks
              .filter((a) => a.id !== id)
              .slice(0, 4)
              .map((relatedArtwork) => (
                <Link
                  key={relatedArtwork.id}
                  href={`/artwork/${relatedArtwork.id}`}
                  className="group block"
                >
                  <div className="relative aspect-[3/4] overflow-hidden rounded shadow-artist group-hover:shadow-artist-hover transition-all duration-300">
                    <Image
                      src={relatedArtwork.image}
                      alt={relatedArtwork.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="mt-3">
                    <p className="caption text-[hsl(var(--muted-foreground))]">
                      {relatedArtwork.title}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import { artistInfo } from '@/lib/artwork-data';

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-[hsl(var(--muted))]">
        <div className="container-artist text-center">
          <h1 className="text-4xl font-bold mb-4">ABOUT THE ARTIST</h1>
          <p className="caption max-w-2xl mx-auto">
            Exploring the intersection of tradition and innovation through visual storytelling
          </p>
        </div>
      </section>

      {/* Artist Statement */}
      <section className="py-16">
        <div className="container-artist">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div>
                <h2 className="section-label mb-4">ARTIST STATEMENT</h2>
                <p className="text-base leading-relaxed mb-4 text-[hsl(var(--foreground))]">
                  {artistInfo.statement}
                </p>
              </div>

              <div>
                <h2 className="section-label mb-4">BIOGRAPHY</h2>
                <p className="text-base leading-relaxed text-[hsl(var(--foreground))]">
                  {artistInfo.bio}
                </p>
              </div>
            </div>

            {/* Exhibitions */}
            <div className="border-t border-[hsl(var(--border))] pt-12">
              <h2 className="section-label mb-6">SELECTED EXHIBITIONS</h2>
              <div className="space-y-3">
                {artistInfo.exhibitions.map((exhibition, index) => (
                  <div
                    key={index}
                    className="py-3 border-b border-[hsl(var(--border))] last:border-b-0"
                  >
                    <p className="text-base text-[hsl(var(--foreground))]">{exhibition}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Images */}
      <section className="py-16 bg-[hsl(var(--muted))]">
        <div className="container-artist">
          <h2 className="section-label mb-8 text-center">SELECTED WORKS</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative aspect-[3/4] overflow-hidden rounded shadow-artist">
              <Image
                src="/generated/gallery-portrait.jpg"
                alt="Selected work 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded shadow-artist">
              <Image
                src="/generated/gallery-urban.jpg"
                alt="Selected work 2"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded shadow-artist">
              <Image
                src="/generated/gallery-interior.jpg"
                alt="Selected work 3"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16">
        <div className="container-artist text-center">
          <h2 className="text-2xl font-semibold mb-4">INTERESTED IN COLLABORATING?</h2>
          <p className="caption mb-8 max-w-xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part
            of your vision.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 text-sm font-medium bg-[hsl(var(--foreground))] text-white hover:bg-[hsl(var(--accent))] transition-colors uppercase tracking-wider"
          >
            GET IN TOUCH
          </Link>
        </div>
      </section>
    </div>
  );
}

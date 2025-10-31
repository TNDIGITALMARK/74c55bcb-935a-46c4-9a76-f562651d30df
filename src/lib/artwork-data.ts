// Artwork data structure for the artist portfolio

export interface Artwork {
  id: string;
  title: string;
  medium: string;
  dimensions: string;
  year: string;
  description: string;
  image: string;
  category: 'digital' | 'painting' | 'photography' | 'mixed-media';
}

export const artworks: Artwork[] = [
  {
    id: '1',
    title: 'Urban Echoes - Digital',
    medium: 'Digital Art',
    dimensions: '24 × 36 inches',
    year: '2024',
    description: 'A minimalist exploration of contemporary portraiture through digital medium, focusing on the interplay of light and shadow to convey depth and emotion.',
    image: '/generated/gallery-portrait.jpg',
    category: 'digital'
  },
  {
    id: '2',
    title: 'Visions of the Soul - Watercolor',
    medium: 'Watercolor on Paper',
    dimensions: '18 × 24 inches',
    year: '2024',
    description: 'An intimate portrait study capturing contemplative moments through subtle tonal variations and expressive brushwork.',
    image: '/generated/gallery-portrait.jpg',
    category: 'painting'
  },
  {
    id: '3',
    title: 'Architectural Dreams - Acrylic',
    medium: 'Acrylic on Canvas',
    dimensions: '30 × 40 inches',
    year: '2024',
    description: 'Abstract urban landscape exploring the geometric beauty of cityscapes through layered forms and muted earth tones.',
    image: '/generated/gallery-urban.jpg',
    category: 'painting'
  },
  {
    id: '4',
    title: 'Engineered Futures - Mixed',
    medium: 'Mixed Media',
    dimensions: '36 × 48 inches',
    year: '2024',
    description: 'Contemporary interpretation of architectural spaces, blending traditional and modern techniques to create visual harmony.',
    image: '/generated/gallery-urban.jpg',
    category: 'mixed-media'
  },
  {
    id: '5',
    title: 'Quiet Spaces - Photography',
    medium: 'Archival Pigment Print',
    dimensions: '20 × 30 inches',
    year: '2024',
    description: 'Minimalist interior photography celebrating the beauty of negative space and natural light in contemporary design.',
    image: '/generated/gallery-interior.jpg',
    category: 'photography'
  },
  {
    id: '6',
    title: 'Serenity in Form - Photography',
    medium: 'Fine Art Photography',
    dimensions: '24 × 32 inches',
    year: '2024',
    description: 'Architectural still life capturing the elegant interplay between furniture, light, and shadow in minimalist interiors.',
    image: '/generated/gallery-interior.jpg',
    category: 'photography'
  },
  {
    id: '7',
    title: 'Golden Horizons - Oil',
    medium: 'Oil on Canvas',
    dimensions: '36 × 48 inches',
    year: '2024',
    description: 'Abstract expressionist landscape featuring warm golden hues and dynamic brushstrokes that evoke the energy of sunset.',
    image: '/generated/gallery-abstract-yellow.jpg',
    category: 'painting'
  },
  {
    id: '8',
    title: 'Amber Dreams - Acrylic',
    medium: 'Acrylic on Canvas',
    dimensions: '30 × 40 inches',
    year: '2024',
    description: 'Textured abstract composition exploring the emotional resonance of warm color palettes and gestural mark-making.',
    image: '/generated/gallery-abstract-yellow.jpg',
    category: 'painting'
  }
];

// Artist information
export const artistInfo = {
  name: 'GILES WATKINS',
  tagline: 'Contemporary Mixed Media Artist',
  email: 'hello@gileswatkins.com',
  phone: '+1 (555) 123-4567',
  location: 'New York, NY',
  statement: `My artistic practice explores the intersection of traditional and contemporary mediums,
    creating works that challenge perceptions of space, form, and emotion. Through careful attention
    to composition and color, I seek to evoke moments of quiet contemplation in our increasingly
    fast-paced world.`,
  bio: `With a background in both fine arts and design, my work has been featured in galleries
    across the United States. I earned my MFA from the School of Visual Arts in New York and have
    been practicing professionally for over a decade. My approach combines classical techniques with
    modern sensibilities, resulting in pieces that resonate with contemporary audiences while
    honoring artistic traditions.`,
  exhibitions: [
    'Contemporary Visions - Chelsea Gallery, New York, 2024',
    'Abstract Expressions - Modern Art Museum, San Francisco, 2023',
    'Urban Perspectives - Brooklyn Arts Center, New York, 2023'
  ],
  socialMedia: {
    instagram: 'https://instagram.com/gileswatkins',
    twitter: 'https://twitter.com/gileswatkins',
    facebook: 'https://facebook.com/gileswatkins'
  }
};

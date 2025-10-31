'use client';

import { useState } from 'react';
import { artistInfo } from '@/lib/artwork-data';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission would typically send to an API
    console.log('Form submitted:', formData);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: 'general', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-[hsl(var(--muted))]">
        <div className="container-artist text-center">
          <h1 className="text-4xl font-bold mb-4">GET IN TOUCH</h1>
          <p className="caption max-w-2xl mx-auto">
            I'd love to hear about your project or answer any questions you may have
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container-artist">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="section-label mb-6">CONTACT INFO</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail size={20} className="text-[hsl(var(--muted-foreground))] mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <a
                      href={`mailto:${artistInfo.email}`}
                      className="caption hover:text-[hsl(var(--accent))] transition-colors"
                    >
                      {artistInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone size={20} className="text-[hsl(var(--muted-foreground))] mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Phone</h3>
                    <p className="caption">{artistInfo.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin size={20} className="text-[hsl(var(--muted-foreground))] mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Location</h3>
                    <p className="caption">{artistInfo.location}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-[hsl(var(--border))]">
                <h3 className="section-label mb-4">OFFICE HOURS</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="caption">Monday - Friday</span>
                    <span className="caption">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="caption">Saturday</span>
                    <span className="caption">By Appointment</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="caption">Sunday</span>
                    <span className="caption">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="section-label mb-6">SEND A MESSAGE</h2>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded p-6 text-center">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">
                    Thank you for your message!
                  </h3>
                  <p className="text-green-700">
                    I'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="commission">Commission Request</option>
                      <option value="purchase">Purchase Inquiry</option>
                      <option value="exhibition">Exhibition/Gallery</option>
                      <option value="press">Press/Media</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full"
                      placeholder="Tell me about your project or inquiry..."
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="px-8 py-3 text-sm font-medium bg-[hsl(var(--foreground))] text-white hover:bg-[hsl(var(--accent))] transition-colors uppercase tracking-wider"
                    >
                      SEND MESSAGE
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[hsl(var(--muted))]">
        <div className="container-artist">
          <h2 className="section-label mb-8 text-center">FREQUENTLY ASKED QUESTIONS</h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded shadow-artist">
              <h3 className="font-semibold mb-2">Do you accept commission work?</h3>
              <p className="caption">
                Yes! I love working on custom pieces. Commission timelines typically range from 4-8
                weeks depending on the scope and complexity of the project.
              </p>
            </div>

            <div className="bg-white p-6 rounded shadow-artist">
              <h3 className="font-semibold mb-2">Are prints available of your work?</h3>
              <p className="caption">
                Limited edition and open edition prints are available for most pieces. All prints
                are archival quality and signed by the artist.
              </p>
            </div>

            <div className="bg-white p-6 rounded shadow-artist">
              <h3 className="font-semibold mb-2">Do you ship internationally?</h3>
              <p className="caption">
                Yes, I ship worldwide. Shipping costs and delivery times vary by location. All
                pieces are carefully packaged and insured during transit.
              </p>
            </div>

            <div className="bg-white p-6 rounded shadow-artist">
              <h3 className="font-semibold mb-2">Can I visit your studio?</h3>
              <p className="caption">
                Studio visits are available by appointment. Please contact me to schedule a time to
                view works in person and discuss your project.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

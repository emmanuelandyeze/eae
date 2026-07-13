'use client';

import { useEffect } from 'react';

export default function ScrollReveal() {
  useEffect(() => {
    const elementsToReveal = [
      '.reveal-hero-headline',
      '.reveal-bio',
      '.reveal-stats',
      '.project-card-reveal',
      '.philosophy-card-reveal',
      '.timeline-reveal',
      '.footer-reveal',
      '.thoughts-reveal'
    ];

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.08
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    elementsToReveal.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
      });
    });

    return () => observer.disconnect();
  }, []);

  return null;
}

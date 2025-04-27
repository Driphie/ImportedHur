
export const useScrollReveal = () => {
  if (typeof window !== 'undefined') {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // This needs to run after the DOM is ready
    setTimeout(() => {
      const elements = document.querySelectorAll('.fade-in-view');
      elements.forEach(el => {
        observer.observe(el);
      });
    }, 100);

    return observer;
  }

  return null;
};

export function measurePerformance(name: string) {
  if (typeof performance === 'undefined') return;

  const start = performance.now();

  return {
    end: () => {
      const end = performance.now();
      const duration = end - start;
      console.debug(`Performance: ${name} took ${duration.toFixed(2)}ms`);
      return duration;
    },
  };
}

export function reportWebVitals(metric: any) {
  console.debug('Web Vitals:', metric);

  // You can send the metric to your analytics service here
  // Example: Google Analytics
  const analyticsId = process.env.NEXT_PUBLIC_GA_TRACKING_ID;
  if (!analyticsId) return;

  // Assumes Google Analytics is loaded
  window.gtag?.('event', metric.name, {
    event_category: 'Web Vitals',
    event_label: metric.id,
    value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
    non_interaction: true,
  });
}
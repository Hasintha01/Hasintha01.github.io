/**
 * Web Vitals Monitoring Script
 * Tracks Core Web Vitals (LCP, FID, CLS) from real users
 * Lightweight and privacy-friendly
 */

(function() {
  'use strict';
  
  // Check if Web Vitals API is supported
  if (!('PerformanceObserver' in window)) return;
  
  // Store vitals data
  const vitals = {};
  
  // Send vitals to analytics (if available)
  function sendToAnalytics(metric) {
    vitals[metric.name] = Math.round(metric.value);
    
    // Send to Google Analytics if available
    if (window.gtag) {
      gtag('event', metric.name, {
        event_category: 'Web Vitals',
        value: Math.round(metric.value),
        event_label: metric.id,
        non_interaction: true,
      });
    }
    
    // Log to console in development
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      console.log(`[Web Vitals] ${metric.name}:`, Math.round(metric.value), metric.rating);
    }
  }
  
  // Largest Contentful Paint (LCP)
  function observeLCP() {
    try {
      const po = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        sendToAnalytics({
          name: 'LCP',
          value: lastEntry.renderTime || lastEntry.loadTime,
          id: 'lcp-' + Date.now(),
          rating: lastEntry.renderTime < 2500 ? 'good' : lastEntry.renderTime < 4000 ? 'needs-improvement' : 'poor'
        });
      });
      po.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
      // LCP not supported
    }
  }
  
  // First Input Delay (FID)
  function observeFID() {
    try {
      const po = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          sendToAnalytics({
            name: 'FID',
            value: entry.processingStart - entry.startTime,
            id: 'fid-' + Date.now(),
            rating: entry.processingStart - entry.startTime < 100 ? 'good' : entry.processingStart - entry.startTime < 300 ? 'needs-improvement' : 'poor'
          });
        });
      });
      po.observe({ entryTypes: ['first-input'] });
    } catch (e) {
      // FID not supported
    }
  }
  
  // Cumulative Layout Shift (CLS)
  function observeCLS() {
    try {
      let clsValue = 0;
      const po = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
      });
      po.observe({ entryTypes: ['layout-shift'] });
      
      // Report CLS on page unload
      addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') {
          sendToAnalytics({
            name: 'CLS',
            value: clsValue,
            id: 'cls-' + Date.now(),
            rating: clsValue < 0.1 ? 'good' : clsValue < 0.25 ? 'needs-improvement' : 'poor'
          });
        }
      }, { once: true });
    } catch (e) {
      // CLS not supported
    }
  }
  
  // First Contentful Paint (FCP)
  function observeFCP() {
    try {
      const po = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            sendToAnalytics({
              name: 'FCP',
              value: entry.startTime,
              id: 'fcp-' + Date.now(),
              rating: entry.startTime < 1800 ? 'good' : entry.startTime < 3000 ? 'needs-improvement' : 'poor'
            });
          }
        });
      });
      po.observe({ entryTypes: ['paint'] });
    } catch (e) {
      // FCP not supported
    }
  }
  
  // Initialize observers
  observeLCP();
  observeFID();
  observeCLS();
  observeFCP();
})();

import { test, expect } from '@playwright/test';

/**
 * E2E Tests: Contact Links
 * Tests external contact links and social profiles
 */

test.describe('Contact Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    // Scroll to contact section
    await page.locator('#contact').scrollIntoViewIfNeeded();
  });

  test('should display contact section with heading', async ({ page }) => {
    const contactSection = page.locator('#contact');
    await expect(contactSection).toBeVisible();
    
    // Should have "GET IN TOUCH" or similar heading
    await expect(contactSection.getByRole('heading')).toBeVisible();
  });

  test('should have valid external contact links', async ({ page, context }) => {
    // Get all links in contact section
    const contactLinks = page.locator('#contact a[href^="http"]');
    const count = await contactLinks.count();
    
    // Should have at least some contact links (GitHub, LinkedIn, etc.)
    expect(count).toBeGreaterThan(0);

    // Verify each link has proper attributes
    for (let i = 0; i < count; i++) {
      const link = contactLinks.nth(i);
      
      // External links should open in new tab
      const target = await link.getAttribute('target');
      expect(target).toBe('_blank');
      
      // Should have security attributes
      const rel = await link.getAttribute('rel');
      expect(rel).toContain('noopener');
      
      // Should have valid href
      const href = await link.getAttribute('href');
      expect(href).toMatch(/^https?:\/\//);
    }
  });

  test('should have accessible contact links', async ({ page }) => {
    const contactLinks = page.locator('#contact a');
    const count = await contactLinks.count();

    for (let i = 0; i < count; i++) {
      const link = contactLinks.nth(i);
      
      // Each link should have accessible text or aria-label
      const text = await link.textContent();
      const ariaLabel = await link.getAttribute('aria-label');
      
      expect(text || ariaLabel).toBeTruthy();
    }
  });

  test('should handle contact link clicks', async ({ page, context }) => {
    // Listen for new pages (external links)
    const pagePromise = context.waitForEvent('page');
    
    // Click first external contact link
    const firstLink = page.locator('#contact a[href^="http"]').first();
    await firstLink.click();
    
    // Verify new tab opened
    const newPage = await pagePromise;
    expect(newPage.url()).toMatch(/^https?:\/\//);
    
    // Close the new tab
    await newPage.close();
  });
});

test.describe('Footer Contact Info', () => {
  test('should have footer with contact information', async ({ page }) => {
    await page.goto('/');
    
    // Scroll to footer
    await page.locator('footer').scrollIntoViewIfNeeded();
    
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
  });

  test('should show footer branding and last sync metadata', async ({ page }) => {
    await page.goto('/');

    const footer = page.locator('footer');
    await expect(footer).toContainText('HASINTHA PASINDU');
    await expect(footer).toContainText('Infrastructure • Automation • Reliability');
    await expect(footer).toContainText(/Last sync:/i);
  });
});

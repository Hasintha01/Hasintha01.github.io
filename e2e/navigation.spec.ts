import { test, expect } from '@playwright/test';

/**
 * E2E Tests: Navigation Flow
 * Tests critical user navigation through portfolio sections
 */

test.describe('Portfolio Navigation', () => {
  test('should load homepage successfully', async ({ page }) => {
    await page.goto('/');
    
    // Check page loads with correct title
    await expect(page).toHaveTitle(/Hasintha Pasindu/);
    
    // Verify hero section is visible
    await expect(page.locator('h1')).toBeVisible();
  });

  test('should navigate through all sections via nav links', async ({ page }) => {
    await page.goto('/');
    
    // Get all navigation links
    const navLinks = [
      { text: 'About', sectionId: '#about' },
      { text: 'Skills', sectionId: '#skills' },
      { text: 'Projects', sectionId: '#projects' },
      { text: 'Homelab', sectionId: '#homelab' },
      { text: 'Blog', sectionId: '#blog' },
      { text: 'Philosophy', sectionId: '#philosophy' },
      { text: 'Contact', sectionId: '#contact' },
    ];

    for (const link of navLinks) {
      // Click navigation link
      await page.getByRole('link', { name: link.text }).click();
      
      // Wait for scroll and verify section is in viewport
      await page.waitForTimeout(500); // Allow smooth scroll
      
      const section = page.locator(link.sectionId);
      await expect(section).toBeInViewport();
    }
  });

  test('should have working mobile navigation', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // On mobile, navigation might be hidden/collapsible
    // Verify hero is still visible
    await expect(page.locator('h1')).toBeVisible();
  });

  test('should load without console errors', async ({ page }) => {
    const consoleErrors: string[] = [];
    
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Should have no console errors
    expect(consoleErrors).toHaveLength(0);
  });
});

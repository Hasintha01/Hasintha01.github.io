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
    
    // Verify hero heading is visible
    await expect(page.getByRole('heading', { level: 1, name: /BUILD RESILIENT INFRASTRUCTURE/i })).toBeVisible();
  });

  test('should navigate through all sections via nav links', async ({ page }) => {
    await page.goto('/');
    
    // Get all navigation links
    const navLinks = [
      { text: 'ABOUT', sectionId: '#about' },
      { text: 'SKILLS', sectionId: '#skills' },
      { text: 'PROJECTS', sectionId: '#projects' },
      { text: 'HOMELAB', sectionId: '#homelab' },
      { text: 'BLOG', sectionId: '#blog' },
      { text: 'CONTACT', sectionId: '#contact' },
    ];

    for (const link of navLinks) {
      // Click navigation link
      await page.locator('nav').first().getByRole('link', { name: link.text, exact: true }).click();
      
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
    
    // Verify mobile menu button is visible and can toggle menu
    const menuButton = page.getByRole('button', { name: /open menu/i });
    await expect(menuButton).toBeVisible();
    await menuButton.click();
    await expect(page.locator('#mobile-menu')).toBeVisible();
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

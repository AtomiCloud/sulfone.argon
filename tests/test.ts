import { expect, test } from '@playwright/test';

test('index page has expected main text', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText('Next Generation Templating Engine')).toBeVisible();
});

test('registry page loads successfully', async ({ page }) => {
  await page.goto('/registry');
  await expect(page.getByPlaceholder(/type here to search/i)).toBeVisible();
});

test('registry page has resolver option in dropdown', async ({ page }) => {
  await page.goto('/registry');
  // Click on the select dropdown to open it
  await page.click('[role="combobox"]');
  // Verify Resolver option exists in the dropdown
  await expect(page.getByRole('option', { name: 'Resolver' })).toBeVisible();
});

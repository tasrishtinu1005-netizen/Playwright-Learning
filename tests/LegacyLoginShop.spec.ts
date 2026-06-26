import { test, expect } from '@playwright/test';
import { POManager } from '../pageobjects_ts/POManager';

// This test covers the login and product verification for the legacy login page

test('Login via legacy page and verify iPhone X is present in shop', async ({ page }) => {
  // Step 1: Go to the legacy login page
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

  // Step 2: Enter username and password
  await page.getByRole('textbox', { name: 'Username:' }).fill('rahulshettyacademy');
  await page.getByRole('textbox', { name: 'Password:' }).fill('learning');

  // Step 3: Select the checkbox for terms and conditions
  await page.getByRole('checkbox', { name: /I Agree to the terms/ }).check();

  // Step 4: Click on Sign In button
  await page.getByRole('button', { name: 'Sign In' }).click();

  // Step 5: Wait for navigation to the shop page
  await page.waitForURL('**/angularpractice/shop');

  // Step 6: Verify if iPhone X product is present on the page
  const iphoneX = page.locator('h4', { hasText: 'iphone X' });
  await expect(iphoneX).toBeVisible();
});

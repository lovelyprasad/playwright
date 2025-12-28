import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://katalon-demo-cura.herokuapp.com/');
  await page.locator('h1').click();
  await expect(page.locator('h1')).toContainText('CURA Healthcare Service');
  await page.getByRole('link', { name: 'Make Appointment' }).click();
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('james smith');
  await page.getByLabel('Username').press('Tab');
  await page.getByLabel('Password').fill('password');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('#login')).toContainText('Login failed! Please ensure the username and password are valid.');
});
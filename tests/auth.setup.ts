import { test as setup , expect } from '@playwright/test';

const authFile = 'playwright/.auth/setup.json';

setup('Authenticate User', async ({ page }) => {
  await page.goto('https://your-app.com/login');

  await page.fill('#email', 'test@example.com');
  await page.fill('#password', 'Password123');

  await page.click('button[type="submit"]');

  await expect(page).toHaveURL(/dashboard/);

  await page.context().storageState({ path:'auth/user.json' });
});
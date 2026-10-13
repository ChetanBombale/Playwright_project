import {test,expect } from '@playwright/test'

test('tooltip', async ({page}) =>
{

await page.goto('https://www.globalsqa.com/demoSite/practice/tooltip/forms.html');

// await page.locator('#firstname').hover();

// const tooltip = page.locator('.ui-tooltip');

// await expect(tooltip).toBeVisible();

// const tooltipText = await tooltip.innerText();
// console.log('Tooltip:', tooltipText);




await page.goto('https://www.globalsqa.com/demoSite/practice/tooltip/forms.html');

page.locator('#firstname').hover();

const tt=page.getByRole('tooltip')
console.log(await tt.innerText());

})
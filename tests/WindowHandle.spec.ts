import  { test, expect } from '@playwright/test'

test  ('handle window' , async  ( {page,context}) =>
{

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

    const parenttitle= await page.title();
    console.log(parenttitle);
    await expect(page).toHaveTitle('Practice Page');

   const [childpage]= await Promise.all([

    context.waitForEvent('page'),

    page.getByRole('link', {name: 'Open Tab'}).click()
         
   ]  )

    await childpage.waitForLoadState();
    
    console.log(await childpage.title());
    
    await page.bringToFront();
    //console.log(await page.title());
   childpage.close();
   console.log('child page close')


})

test (' on click multiple tab get open ', async ({page, context}) =>
{
      await page.goto('https://yourapplication.com');
    // वर्तमान pages count
    const existingPages = context.pages().length;
    // Click केल्यावर 3 tabs open होणार
    await Promise.all([
        page.locator('#openTabs').click()
    ]);
    // नवीन tabs open होण्यासाठी wait
    await expect.poll(() => context.pages().length)
        .toBe(existingPages + 3);
    // सर्व tabs मिळवा
    const allPages = context.pages();
    // title वापरून specific tab शोधा
    for (const currentPage of allPages) {

        await currentPage.waitForLoadState();

        const title = await currentPage.title();

        console.log(title);

        if (title.includes('Google')) {

            await currentPage.bringToFront();

            console.log('Google Tab Found');

            await currentPage.locator('textarea').fill('Playwright');

            break;
        }
    }
});
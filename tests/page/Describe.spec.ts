import {test, expect} from  '@playwright/test'

test.describe('test annotation and hooks', async ()=>
{

    // test.beforeEach(async ({page})=>{
    // await page.goto('https://www.saucedemo.com/')

    // })

    test('login with correct password', async ({page})=>
    {
         await page.goto('https://www.saucedemo.com/')
        await page.locator('#user-name').fill('standard_user');
        console.log('first test exected')
    })

    test ('login with invalid', async ({page})=>
    {
             test.slow();
                console.log('second test executed')
    })
   






})




test(' @regression , @sanity to test a tag ', async ({page})=>{

  await page.goto('https://www.saucedemo.com/')
        await page.locator('#user-name').fill('standard_user');
        console.log('first test exected');

})


test(' to test a tag ',{tag:'@chetan'},  async ({page})=>{

  await page.goto('https://www.saucedemo.com/')
        await page.locator('#user-name').fill('standard_user');
        console.log('first test exected');

})


test ('to chec a checkbox ', async ({page})=>
{

    await page.goto('https://testautomationpractice.blogspot.com/');



   const checkbox = page.locator('//label[text()="Days:"]//following::label[@class="form-check-label"]');
    console.log(await checkbox.allInnerTexts());
    const checkboxes=await checkbox.all();
 await expect(checkbox).toHaveCount(7);
    
    for (let ch of checkboxes)
    {        await ch.check ();
        await expect(ch).toBeChecked();

        console.log(await ch.isChecked());
    }



await page.screenshot(
    {
        path:'Screenshot/Test_data.png',
     fullPage: true
    }
)


    const below= page.locator("//a[text()='Youtube']")
await below.scrollIntoViewIfNeeded();

})
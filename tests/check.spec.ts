import {expect, test} from '@playwright/test'

// test('to check the check box', async  ({page}) =>
// {

// await page.goto('https://testautomationpractice.blogspot.com/')

// const radio= page.getByRole('radio', ({name : 'Male' , exact: true  }));
 
// await radio.check();

// await expect(radio).toBeChecked();

// })




// test('to check the checkbox' ,   async( {page})=>

// {
//    await page.goto('https://testautomationpractice.blogspot.com/');

//    const checkbox = page.locator('//label[text()="Days:"]//following::label[@class="form-check-label"]');

//    await expect(checkbox).toHaveCount(7);

//    const checkbox1= checkbox.nth(0);

//    const checkbox2=checkbox.nth(3)

//    await checkbox1.check();
//    await checkbox2.check();

//    await expect(checkbox1).toBeChecked();
//    await expect(checkbox2).toBeChecked();

//    await checkbox1.uncheck();
//    await expect(checkbox1).not.toBeChecked();


// })




test('to check the checkbox1111' ,   async( {page})=>

{
   await page.goto('https://testautomationpractice.blogspot.com/');

   const checkbox = page.locator('//label[text()="Days:"]//following::label[@class="form-check-label"]');

   const allcheckboxes= await checkbox.all();
   await expect(checkbox).toHaveCount(7);
console.log('it has 7 checkboxes');

for (let ch of allcheckboxes)
{
    await ch.check();
    await expect(ch).toBeChecked();
}
console.log('all checkboxes are checked');

})
import {expect, test } from '@playwright/test'

test ('Hover ', async ({page})=>
{

   await page .goto('https://testautomationpractice.blogspot.com/');

    await  page.getByRole('button', {name:'Point Me'}).hover();
    await page .getByRole('link', {name:'Mobiles'}).click();

   await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/#');

console.log('url is correct and link is mobile is selected');

    
})

test ('double click', async ({page}) =>

{
 await page .goto('https://testautomationpractice.blogspot.com/', {waitUntil:'domcontentloaded'});

 const dblclickelement=page.locator('//*[text()="Copy Text"]')

 await dblclickelement.dblclick();

 //await expect(page.locator('#field2')).toHaveText('Hello World!')

 console.log(' dblclick perform using inbuild method')

 await dblclickelement.click({clickCount:2});

 console.log('double click perform using sending click count')






})


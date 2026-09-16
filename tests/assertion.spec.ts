import  { test, expect } from '@playwright/test'

test ('assertion  soft and hard' , async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/', {  waitUntil : 'domcontentloaded'})

    await expect.soft (page).toHaveTitle('Automation Testing Practice');
    console.log('assertion one executed' );

    await expect.soft(page.locator('#name')).toBeVisible();
    console.log('assertion 2 executed')

});
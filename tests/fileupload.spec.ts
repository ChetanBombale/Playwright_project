import path from 'path';
import { test, expect } from '@playwright/test';

test('file upload', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/upload',{waitUntil:'domcontentloaded'});

    const filepath=path.resolve('C:/Users/91985/Desktop/Adhar 1.pdf');
    await page.setInputFiles('#file-upload',filepath);
    await page.setInputFiles("",'');
    await page.locator('#file-submit').click();
         
});

test('file upload1', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/upload',{waitUntil:'domcontentloaded'});

    await page.locator('#file-upload').setInputFiles('C:/Users/91985/Desktop/Adhar 1.pdf');
    const title= 'The Internet';
    await expect(page).toHaveTitle (title);
    console.log(page.title);  
    await page.locator('#file-submit').click();
         
});
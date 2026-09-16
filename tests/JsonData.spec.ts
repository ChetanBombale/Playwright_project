import { test, expect } from '@playwright/test';
import loginData from 'C:/PlayWright_Project/tests/Test_Data/Login_Data.json';
import fs from 'fs';

for (const data of loginData) {

test(`Login Test for ${data.firstname}`, async ({ page }) => {

await page.goto('https://testautomationpractice.blogspot.com/');

const firstname = page.getByPlaceholder('Enter Name');

const email = page.getByRole('textbox', { name: 'Email' });

await expect(firstname).toBeVisible();

await expect(email).toBeVisible();

await firstname.fill(data.firstname);

await email.fill(data.email);

await page.waitForTimeout(3000);

});

}


const data = JSON.parse(
fs.readFileSync('C:/PlayWright_Project/tests/Test_Data/Login_Data.json', 'utf-8')

);

for (const user of data) {

test(`Test for ${user.firstname}`, async ({ page }) => {
await page.goto('https://testautomationpractice.blogspot.com/');
await page.getByPlaceholder('Enter Name')
.fill(user.firstname);
await page.getByRole('textbox', { name: 'Email' })
.fill(user.email);

await page.waitForTimeout(3000);

});

}
import {test, expect } from '@playwright/test'

// type loginData={
//     firstname : string,
//     email : string,
// }

// const loginData: loginData[]=[

 const loginData = [

    {
        firstname :'chetan',
        email:'chetan.b@g.com'
    },

    {
        firstname: 'ashivni',
        email:'a.1@gmail.com'
    }
   ];
   
for (const d of loginData)
{

test(`using data from array for ${d.firstname}` , async ({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/')

const firstname= page.getByPlaceholder('Enter Name');
await expect(firstname).toBeVisible();
console.log('first name is visible')

const email= page.getByRole('textbox', {name:'Email'})
await email.isVisible();
console.log('email displayed')

await firstname.fill(d.firstname);
await email.fill(d.email);

await page.waitForTimeout(3000);



} )
}
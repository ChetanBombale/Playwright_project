import {test, expect} from '@playwright/test';
import {chromium} from '@playwright/test';


test ('to check element', async ({page}) =>
{

   await page.goto('https://testautomationpractice.blogspot.com/');
   
   const name = page.locator('#name');
   const  email= page .getByRole('textbox', {name:'email' });

   await name.fill('chetan manohar bombale');
   await email.fill('chetanbombale@gmail.com')

   console.log(await page.title());

   const actual =await name.inputValue();
   const actualemail =await email.inputValue();

  await expect (name).toHaveValue(actual);

      await expect (email).toHaveValue(actualemail);




 

})
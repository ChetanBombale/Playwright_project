import {expect, test} from  '@playwright/test'

 
// test ( 'gety all opiton and select one  ', async ({page})=>
// {
// await page.goto ('https://testautomationpractice.blogspot.com/');
//     let country=page.locator('#country');
//     let countryalloption= await country.locator('option').allTextContents();

//     console.log(countryalloption);

//     for (let ch of countryalloption)
//     {
//         if (ch.trim()==='France')
//         {
//             await country.selectOption( {label : ch});
//         }
//     }
               
      

            test('select value from dropdown', async({page}) =>
            {
                 await page.goto ('https://testautomationpractice.blogspot.com/');

                let colordropdown= page.locator('#colors') ;  

              await colordropdown.selectOption('Green');

              console.log('greeen is selected')

              colordropdown.selectOption ({value:'blue'})

              await expect(colordropdown).toHaveValue('blue');
              
           })









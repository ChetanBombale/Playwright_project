import {test} from '@playwright/test'


            test('to check alerts', async ({page})=>
          {

           await   page.goto('https://testautomationpractice.blogspot.com/');         

            // const Alert1= page.getByRole('button', {name: 'Simple Alert'});

            // await Alert1.click();
            
                    
          const alert2 = page.getByText('Confirmation Alert');
                   
         page.on ('dialog', (dialog)=>
        {
          console.log(dialog.message());
          dialog.accept('chetan');

          console.log(dialog.type());
       
        })

          
               
              await alert2.click();
         
              const prompt3=  page.locator('#promptBtn');
              await prompt3.click();


      await page.waitForTimeout(3000);
         });
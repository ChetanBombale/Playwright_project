import {expect, test,BrowserContext} from  '@playwright/test'

 
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




        


 //test  ('dropdown handle ', async ({browser}) =>  {

  // let context22= await browser.newContext();
// //     let page= await context22.newPage();
// //     await page.goto('https://testautomationpractice.blogspot.com/')
// //      let contrydrop=page.locator('#country')
// //     // await contrydrop.selectOption({index:3})
// //     // await expect(contrydrop).toContainText('Germany')
// //     // await console.log('Germany is selected')

// //     let allconty=await contrydrop.locator('option')
// //     console.log(allconty)
// //     console.log(await allconty.count())

// //         let allconty1=await contrydrop.locator('option').allInnerTexts();

// //     for (let ch of allconty1    )

// //       {

// //         if (ch.trim()==='India')
// //         {
// //           await contrydrop.selectOption(ch)

// //           await expect(contrydrop).toContainText('India')
// //           console.log('India is selected')
// //         }
// //       }


// // await page.screenshot({path:'Entername.png',
// //   fullPage:true
// // }
  
// // )

// //   }
// // )


// test("goofle dropdwon", async ({page})=>
// {
// await page.goto ('https://www.google.com/')
// let searchbar=page.locator('//textarea[@aria-label="Search"]')  // Search for it 
// await searchbar.fill('India')   //  send data into it
// page.waitForTimeout(1000)
// let alloption= page.locator('//ul[@role="listbox"]');   // je option ahe tyacha parent
// let optioncount =alloption.locator('li')       //chile cha count 
// console.log(await optioncount.count())                     //. print 

//  let optionvtext = await optioncount.allInnerTexts() // text ghetle 
//  console.log( optionvtext)                       // print

// await page.screenshot({path:'google.png'})

// for (let i=0; i<optionvtext.length ;i++)
// {

//   if (optionvtext[i].trim() === 'india national cricket team vs west indies cricket team timeline')
//   {
//          await optioncount.nth(i).click();

//          console.log('given value printed')
//          console.log( await page.title());
//   }
// }

// })

test.only('google auto suggestion ', async ({page,context})=>
{
   await page.goto('https://www.google.com/');

   let searchbar=page.locator('//textarea[@aria-label="Search"]');
   let alloption=page.locator('//div[@role="presentation"]//li');
   
   await searchbar.fill('India');
   await page.waitForTimeout(1000);
   let alloptiontext=await alloption.allInnerTexts();
   console.log(alloptiontext);

   for(let i=0; i<alloptiontext.length;i++)
   {
      if(alloptiontext[i].trim() ==='india national cricket team vs west indies cricket team')
      {
            
        await alloption.nth(i).click(),
        console.log('option is selected')
        console.log(await page.title())
      }

   }

})

test('dropdown practice', async ({page})=>
{
   await page.goto('https://testautomationpractice.blogspot.com/')
   let countrydrop= page.locator('#country');

   let Contryall= countrydrop.locator('option');
   console.log(await Contryall.allTextContents());
   await countrydrop.selectOption({index: 4})




})
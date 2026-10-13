import {test ,expect } from '@playwright/test'


// // test  ('dropdown handle ', async ({browser}) =>  {

// //     let context22= await browser.newContext();
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

test.only('google auto suggestion ', async ({page})=>
{
   await page.goto('https://www.google.com/');

    let searchbar= page.locator('//*[@aria-label="Search"]')
    await searchbar.pressSequentially ('India');
 
    let alloptionparent = page.locator('//*[@role="listbox"]/parent::div[@role="presentation"]');
    let optioncount= alloptionparent.locator('li')


    console.log(await optioncount.allInnerTexts());
        console.log(await optioncount.count());

        let alloption= await optioncount.allInnerTexts();
         page.waitForTimeout(1000)
        for (let i=0; i<alloption.length;i++)
        {
           if(alloption[i].trim() ==='india national cricket team vs west indies cricket team timeline')
           {
                await optioncount.nth(i).click();
                console.log('given value is match ')
                console.log(await page.title())
                break;
           }
        }

    await page.screenshot({
      path: 'india.png',
      fullPage:true
    })

})









// test("google dropdown", async ({ page }) => {

//   await page.goto('https://www.google.com/');

//   const searchbar = page.locator('//textarea[@aria-label="Search"]');
//   await searchbar.fill('India');

//   await page.waitForTimeout(1000);

//   const alloption = page.locator('//ul[@role="listbox"]');
//   const options = alloption.locator('li');

//   const optionvtext = await options.allInnerTexts();

//   console.log(optionvtext);

//   for (let i = 0; i < optionvtext.length; i++) {

//     if (optionvtext[i].trim() ===    "india national cricket team vs west indies cricket team timeline"
//     ) {
//       await options.nth(i).click();
//       break;
//     }
//   }

//   await page.screenshot({ path: 'google.png' });

// });
import {expect, test } from '@playwright/test'

test('flipkart test ', async ({page}) => 
{

    await page.goto('https://www.flipkart.com/')

    const search= page.getByRole('textbox', { name: 'Search for Products, Brands' });

 await search.click();
 await search.fill('Led light');

 const a=await expect(search).toHaveValue('Led light')
 console.log(a);

 const srcbtn= page. getByRole('button', { name: 'Search for Products, Brands' })
 srcbtn.click();

  const ledlight= page.getByRole('link', { name: 'Longitude 1200 LEDs 10 m Multicolor Steady Strip Rice L...' })

  await ledlight.click();

  console.log('led light displayed')

  const buynow= page.locator('.css-g5y9jx > div:nth-child(2) > ._1psv1zeb9 > div > div > div:nth-child(2)')

  await buynow.click();
})
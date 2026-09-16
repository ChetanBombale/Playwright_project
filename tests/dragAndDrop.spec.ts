import {test } from '@playwright/test'

test ('drag and drop',async ({page})=>
{
page .goto('https://testautomationpractice.blogspot.com/');
const source=page.locator('#draggable');
const target=page.locator('#droppable');

await source.dragTo(target);


console.log('it is drga');

})  
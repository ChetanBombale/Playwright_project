import {test} from '@playwright/test'
import { LoginPage } from './page/LoginPage'
import { InventoryPage } from './page/InventoryPage';
test.describe('test data', async ()=> {


test(' inventory item', async({page})=>{

    const Login= new LoginPage(page);
    const inventory= new InventoryPage(page);

await Login.navigateToLoginPage();
await Login.enterUsername('standard_user')
await Login.enterPassword('secret_sauce')
await Login.clickLoginButton();

await inventory.verifyInventoryPageIsDisplayed();




})

})
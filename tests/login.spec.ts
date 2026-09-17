import {test, expect} from '@playwright/test';
import { LoginPage } from './page/LoginPage';


test.describe('SauceDemo Login Tests', () => {

    test('login with valid credentrials',async ({page})=>{

        let loginPageObj= new LoginPage(page);

        await loginPageObj.navigateToLoginPage();

        await loginPageObj.login('standard_user','secret_sauce');

        


    });





});
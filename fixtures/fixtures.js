import {test as base} from '@playwright/test'
import { LoginPage } from "../pages/loginPage";
import { InventoryPage } from '../pages/inventoryPage';
import {CartPage} from '../pages/cartPage'
import {CheckoutPage} from '../pages/checkoutPage'

export const test =base.extend({

 loginpage : async ({page},use)=>{

       await  use(new LoginPage(page))

 },

inventorypage : async ({page},use)=>{


    await use(new InventoryPage(page))
},
cartpage : async ({page},use)=>{

    await use(new CartPage(page) )
},
checkoutpage : async ({page},use)=>{

    await use(new CheckoutPage(page))
}


})

export { expect } from '@playwright/test';
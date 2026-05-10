import { test, expect } from '../fixtures/fixtures';

test('cart page checkout', async ({ loginpage, inventorypage, cartpage, page})=>{

  await loginpage.goto();
  await loginpage.login('standard_user', 'secret_sauce');

  await inventorypage.addProduct('Sauce Labs Backpack');

   await inventorypage.goToCart();


    await cartpage.checkout();



    await expect(page.getByText('Checkout: Your Information')).toBeVisible();

  




})

test('Visible Header',async({loginpage, inventorypage, cartpage, page})=>{

 await loginpage.goto();
  await loginpage.login('standard_user', 'secret_sauce');

  await inventorypage.addProduct('Sauce Labs Backpack');

   await inventorypage.goToCart();

   await cartpage.checkHeader();
checkHeaderSec

})

test('Visible sec_Header',async({loginpage, inventorypage, cartpage, page})=>{

 await loginpage.goto();
  await loginpage.login('standard_user', 'secret_sauce');

  await inventorypage.addProduct('Sauce Labs Backpack');

   await inventorypage.goToCart();

   await cartpage.checkHeaderSec();


})

test('Visible Cont..Shopping',async ({loginpage, inventorypage, cartpage, page})=>{

 await loginpage.goto();
  await loginpage.login('standard_user', 'secret_sauce');

  await inventorypage.addProduct('Sauce Labs Backpack');

   await inventorypage.goToCart();
    //console.log(await cartpage.contshoppig())
  await expect(await cartpage.contshoppig()).toBeVisible();

})


test('Footer Visiblity', async({loginpage, inventorypage, cartpage, page})=>{

  await loginpage.goto();
  await loginpage.login('standard_user', 'secret_sauce');

  await inventorypage.addProduct('Sauce Labs Backpack');

   await inventorypage.goToCart();
   
const count=await cartpage.footerCheck()
 console.log(count)



})
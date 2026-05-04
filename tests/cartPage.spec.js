import { test, expect } from '../fixtures/fixtures';

test('cart page', async ({ loginpage, inventorypage, cartpage, page})=>{

  await loginpage.goto();
  await loginpage.login('standard_user', 'secret_sauce');

  await inventorypage.addProduct('Sauce Labs Backpack');

   await inventorypage.goToCart();


    await cartpage.checkout();



    await expect(page.getByText('Checkout: Your Information')).toBeVisible();

  




})
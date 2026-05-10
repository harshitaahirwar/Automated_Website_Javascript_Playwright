import { test, expect } from '../fixtures/fixtures';

test('@smoke complete checkout flow', async ({ 
  loginpage, 
  inventorypage, 
  cartpage, 
  checkoutpage, 
  page 
}) => {

 
  await loginpage.goto();
  await loginpage.login('standard_user', 'secret_sauce');

  
  await inventorypage.addProduct('Sauce Labs Backpack');


  await inventorypage.goToCart();

 
  await cartpage.checkout();

  
  await checkoutpage.fillDetails('John', 'Doe', '12345');
  await expect(page).toHaveURL(/checkout-step-two/);
   
   await checkoutpage.finish();

   await expect(page).toHaveURL(/checkout-complete/);
  await expect(page.getByText('Thank you for your order!')).toBeVisible();
});

test('CheckCencel',async({ loginpage, 
  inventorypage, 
  cartpage, 
  checkoutpage, 
  page })=>{

      await loginpage.goto();
  await loginpage.login('standard_user', 'secret_sauce');

  
  await inventorypage.addProduct('Sauce Labs Backpack');


  await inventorypage.goToCart();

 
  await cartpage.checkout();


    console.log(await checkoutpage.cancel())

   await  expect(page).toHaveURL('https://www.saucedemo.com/cart.html')



})
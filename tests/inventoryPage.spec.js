import { test, expect } from '../fixtures/fixtures';

test('add product to cart', async ({ loginpage, inventorypage, page }) => {

  await loginpage.goto();
  await loginpage.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory/, { timeout: 10000 });
  //await expect(page).toHaveURL(/inventory/);

  console.log(await inventorypage.getAllProductNames());
await inventorypage.OpenSideMenu();
await inventorypage.CloseSideMenu();
  await inventorypage.addProduct('Sauce Labs Backpack');
  //removeProduct
  await inventorypage.sortBy('lohi');
  await inventorypage.removeProduct('Sauce Labs Backpack');
 
  await inventorypage.goToCart();
  console.log(await  inventorypage.getCartCount());

  await expect(page).toHaveURL(/cart/);
});
import { test, expect } from '../fixtures/fixtures';

test('add product to cart', async ({ loginpage, inventorypage, page }) => {

  await loginpage.goto();
  await loginpage.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory/, { timeout: 10000 });
  //await expect(page).toHaveURL(/inventory/);

  await inventorypage.addProduct('Sauce Labs Backpack');
console.log(await inventorypage.getCartCount())
const count = await inventorypage.getCartCount();

  await expect(count).toBeGreaterThanOrEqual(1);
});


test('Get the Product count',async({loginpage, inventorypage, page})=>{
await loginpage.goto();
  await loginpage.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory/, { timeout: 10000 });
const count = await inventorypage.getCartCount();

  await expect(count).toBeGreaterThanOrEqual(1);


})

test('HambergerCheck', async ({loginpage,inventorypage,page})=>{

 await loginpage.goto();
  await loginpage.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory/, { timeout: 10000 });
await inventorypage.OpenSideMenu();
await inventorypage.CloseSideMenu();
  await expect(page).toHaveURL(/inventory/, { timeout: 10000 });
})


test('HambergerCheckMenu', async ({loginpage,inventorypage,page})=>{

 await loginpage.goto();
  await loginpage.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory/, { timeout: 10000 });
await inventorypage.OpenSideMenu();
const items =await inventorypage.hambergerListCount();

await expect(items).toEqual([
    'All Items',
    'About',
    'Logout',
    'Reset App State'
])

})




test("Get All Product",async({loginpage, inventorypage, page})=>{
   await loginpage.goto();
  await loginpage.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory/, { timeout: 10000 });

   const ProductsList =await inventorypage.getAllProductNames();
console.log(ProductsList)
  
})

test("Get Specific Product",async({loginpage, inventorypage, page})=>{
   await loginpage.goto();
  await loginpage.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory/, { timeout: 10000 });

   const SpecificProduct =await inventorypage.getAllProductNames();
   //console.log(SpecificProduct)
   await expect(SpecificProduct.length).toBeGreaterThan(1)
for(let i=0;i<SpecificProduct.length;i++){
   if(SpecificProduct[i]=='Sauce Labs Backpack')
   console.log('Find ')

}

//or

expect(SpecificProduct).toContain('Sauce Labs Backpack')
  
})


test('Sort Product', async({loginpage, inventorypage, page})=>{

 await loginpage.goto();
  await loginpage.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory/, { timeout: 10000 });

   const alldropdownElement = await inventorypage.sortBy();
   //console.log(alldropdownElement)
expect(alldropdownElement).toEqual(['Name (A to Z)',
  'Name (Z to A)',
  'Price (low to high)',
  'Price (high to low)'])

})


test('Remove a  Product',async({loginpage, inventorypage, page})=>{

 await loginpage.goto();
  await loginpage.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory/, { timeout: 10000 });

    await inventorypage.addProduct('Sauce Labs Backpack');

 await inventorypage.removeProduct('Sauce Labs Backpack');



})



test('Remove mulitple  Product',async({loginpage, inventorypage, page})=>{

 await loginpage.goto();
  await loginpage.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory/, { timeout: 10000 });

   const products = [
    'Sauce Labs Backpack',
    'Sauce Labs Bike Light',
    'Sauce Labs Bolt T-Shirt'
  ];
    for(const product of products){

    await inventorypage.addProduct(product);

  }

  for(const product of products)
  {
    await inventorypage.removeProduct(product);

  }

 })


test('Landing to Cart page',async ({loginpage, inventorypage, page})=>{

 await loginpage.goto();
  await loginpage.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory/, { timeout: 10000 });

  const products = [
    'Sauce Labs Backpack',
    'Sauce Labs Bike Light',
    'Sauce Labs Bolt T-Shirt'
  ];
    for(const product of products){

    await inventorypage.addProduct(product);

  }

 
  await inventorypage.goToCart();
 const alladdedproduct= await  inventorypage.getCartProduct()
  console.log(alladdedproduct);

  await expect(page).toHaveURL(/cart/);




})



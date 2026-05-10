import { test, expect } from '../fixtures/fixtures';
// import { users } from '../data/users';

test('login as admin', async ({ loginpage, page }) => {
  //const loginPage = new LoginPage(page);

  await loginpage.goto();
  await loginpage.login('standard_user', 'secret_sauce');

 await expect(page).toHaveURL(/inventory/);
});


test('LogoCheck',async ({loginpage,page})=>{

await loginpage.logocheck();

})
export class LoginPage {
    
  constructor(page) {
    this.page = page;
    //in constructor only locator . no await only synchronous task, only initilize data and locators 
     //this.page.fill('#username', username);
    this.userInput= this.page.getByRole('textbox',{name:'Username'});
 this.passwordInput=  this.page.getByRole('textbox',{name:'Password'});
    this.loginButton=  this.page.getByRole('button',{name:'Login'});

    this.logo=this.page.getByText('Swag Labs');

  }

  async goto() {
    await this.page.goto('/');
  }

  async login(username, password) {
    await this.userInput.fill(username);
    await this.passwordInput.fill(password);
      await Promise.all([
    this.page.waitForURL(/inventory/),
    this.loginButton.click()
  ]);}

async logocheck(){
await this.logo.waitFor({state:'visible'})

}







}
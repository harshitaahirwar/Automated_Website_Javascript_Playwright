
import { expect } from '@playwright/test';

export class CartPage {
  constructor(page) {
    this.page = page;
   // this.checkoutButton = this.page.locator('#checkout');
    this.checkoutButton = this.page.getByRole('button', { name: 'Checkout' });
   this.cartTitle = this.page.getByText('Your Cart');
     this.checkoutTitle = this.page.getByText('Checkout: Your Information');
  this.sec_header=this.page.getByText('Your Cart');
     this.header=this.page.getByText('Swag Labs');
     this.cont_shopping=this.page.locator('#continue-shopping');
     this.footer=this.page.locator('.footer');
     this.social_footer=this.page.locator(".social a");
      
  }

 


  async checkout() {
    
    await expect(this.cartTitle).toBeVisible();

   
    await this.checkoutButton.click();

   
    await expect(this.checkoutTitle).toBeVisible();
  }

  async checkHeader(){
    return await this.header.click();
  }

  async checkHeaderSec(){

    return await this.sec_header.click();
  }

  async contshoppig(){
    return await this.cont_shopping;
  }

  async footerCheck(){
  return await this.social_footer.count();
    // return await this.footer;
  }


}
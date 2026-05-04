
import { expect } from '@playwright/test';

export class CartPage {
  constructor(page) {
    this.page = page;
   // this.checkoutButton = this.page.locator('#checkout');
    this.checkoutButton = this.page.getByRole('button', { name: 'Checkout' });
   this.cartTitle = this.page.getByText('Your Cart');
     this.checkoutTitle = this.page.getByText('Checkout: Your Information');
      
  }

 


  async checkout() {
    
    await expect(this.cartTitle).toBeVisible();

   
    await this.checkoutButton.click();

   
    await expect(this.checkoutTitle).toBeVisible();
  }
}
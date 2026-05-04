import {expect} from '@playwright/test'
export class InventoryPage {
  constructor(page) {
    this.page = page;
 this.product = this.page.locator('.inventory_item');
 this.openMenu = this.page.getByRole('button', { name: 'Open Menu' });
this.closeMenu = this.page.getByRole('button', { name: 'Close Menu' });
    this.Cart_badge = this.page.locator('.shopping_cart_badge');
    this.sortDropdown = this.page.locator('.product_sort_container');
   this.productNames = this.page.locator('.inventory_item_name');
    
  }

  async addProduct(productName) {
  const specificProduct=  this.product.filter({ hasText: new RegExp(productName)});
      await expect(specificProduct).toHaveCount(1);
      console.log(specificProduct);
      await specificProduct.getByRole('button', { name: 'Add to cart' }).click();
  }


  async removeProduct(productName){
    const specificProduct=  this.product.filter({ hasText: productName});
    await specificProduct.getByRole('button',{name :'Remove'}).click();


  }

  async OpenSideMenu(){
    await  this.openMenu.click();
        
}

async sortBy(option) 
{
  console.log(option)
   await this.sortDropdown.selectOption(option);
  
  
}
async getAllProductNames() {
    return await this.productNames.allTextContents();
  }

 async CloseSideMenu(){
     await this.closeMenu.waitFor({ state: 'visible' });
    await  this.closeMenu.click();
}

 async getCartCount() {
  if(await this.Cart_badge.count()==0)
 {  
    return 0;
  }
 const text= await this.Cart_badge.innerText();
 return text;
  
  }



  async goToCart() {
    await this.page.locator('.shopping_cart_link').click();
  }
}
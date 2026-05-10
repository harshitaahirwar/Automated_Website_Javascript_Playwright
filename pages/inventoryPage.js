import {expect} from '@playwright/test'
export class InventoryPage {
  constructor(page) {
    this.page = page;
 this.product = this.page.locator('.inventory_item');
 this.openMenu = this.page.getByRole('button', { name: 'Open Menu' });
this.closeMenu = this.page.getByRole('button', { name: 'Close Menu' });
    this.Cart_badge = this.page.locator("//div[@class='cart_list']//div[@class='cart_item_label']//a");
    this.sortDropdown = this.page.locator("option");
   this.productNames = this.page.locator('.inventory_item_name');
   this.hambergerList =this.page.locator("//nav[@class='bm-item-list']//a");
  this.cartBadge_count =page.locator('.shopping_cart_badge');
    
  }

  async addProduct(productName) {
  const specificProduct=  this.product.filter({ hasText: new RegExp(productName)});
      await expect(specificProduct).toHaveCount(1);
      //console.log(specificProduct);
      await specificProduct.getByRole('button', { name: 'Add to cart' }).click();
  }


  async removeProduct(productName){
    const specificProduct=  this.product.filter({ hasText: productName});
    await specificProduct.getByRole('button',{name :'Remove'}).click();


  }


  async getCartCount(){

    if(await this.cartBadge_count.count() === 0){

        return 0;

    }

    return Number(
      await this.cartBadge_count.innerText()
    );

}



  async OpenSideMenu(){
    await  this.openMenu.click();
        
}

async sortBy() 
{
 
  return await this.sortDropdown.allTextContents();

  
  
}


async getAllProductNames() {
    return await this.productNames.allTextContents();
  }

 async CloseSideMenu(){
     await this.closeMenu.waitFor({ state: 'visible' });
    await  this.closeMenu.click();
}

 async getCartProduct() {
//   if(await this.Cart_badge.count()==0)
//  {  
//     return 0;
//   }
  return await this.Cart_badge.allTextContents();
 
  
  }





  async hambergerListCount(){
  
return await this.hambergerList.allTextContents();

  }



  async goToCart() {
    await this.page.locator('.shopping_cart_link').click();
  }
}
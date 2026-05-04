export class CheckoutPage{


constructor(page){
this.page=page;

this.first_Name = this.page.getByPlaceholder('First Name');
this.last_Name = this.page.getByPlaceholder('Last Name');
this.zip_code =this.page.getByPlaceholder('Zip/Postal Code');

this.contiueButton=this.page.getByRole('button', { name: 'Continue' });
this.finishButton = this.page.getByRole('button', { name: 'Finish' });


}

async fillDetails(firstName,lastName,zip){
 await this.first_Name.fill(firstName);
 await this.last_Name.fill(lastName);
 await this.zip_code.fill(zip);
 await this.contiueButton.click();
}

async finish()
{
await this.page.getByText('Checkout: Overview');
  await this.finishButton.click();
}





}

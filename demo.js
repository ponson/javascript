const TAX_RATE = 0.05;
const PHONE_PRICE = 23000;
const ACCSRY_PRICE = 1500;
const BUDGET = 50000;

var bank_money = prompt("Insert the money in your bank account.");
var phoneBuy = 0;
var accsryBuy = 0;
var phone_price_tax = PHONE_PRICE * (1+TAX_RATE);
var phone_accsry_price_tax = (PHONE_PRICE+ACCSRY_PRICE) * (1+TAX_RATE);

while (bank_money >= phone_price_tax) {
	
	phoneBuy ++;
	if (bank_money >= phone_accsry_price_tax)
	{
		bank_money -= phone_accsry_price_tax;
		accsryBuy++;
		console.log("I can buy one phone with accessory.");
	}
	else {
		bank_money -= phone_price_tax;
		console.log("I can buy one phone without accessory.");
	}
}

console.log("I have bought " + phoneBuy + "phone(s). and " + accsryBuy + "accessories.");
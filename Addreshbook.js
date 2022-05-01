//defining new class Address book
class AddressBook
{
    //creating parametrized constructor using spread array
    constructor(...params)
    {
        //defining first name, last name, address , city, state, zip, phone number and email
        this.firstName= params[0];
        this.lastName= params[1];
        this.address= params[2];
        this.city= params[3];
        this.state= params[4];
        this.zip= params[5];
        this.phoneNumber= params[6];
        this.email= params[7];
    }
    //getter and setter for first name
    get firstName(){return this._firstName;}
    set firstName(firstName)
    {
        let nameRegex= RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(firstName))
            this._firstName= firstName;
        else throw "Invalid first Name";
    }
    //getter and setter for last name
    get lastName(){return this._lastName;}
    set lastName(lastName)
    {
        let nameRegex= RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(lastName))
            this._lastName= lastName;
        else throw "Invalid last Name";
    }
    //getter and setter for address
    get address(){return this._address;}
    set address(address)
    {
        let addressRegex= RegExp('^[A-Z0-9a-z]{4,}$');
        if(addressRegex.test(address))
            this._address= address;
        else throw "Incorrect Address";
    }
    //getter and setter for city
    get city(){return this._city;}
    set city(city)
    {
        let cityRegex= RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(cityRegex.test(city))
            this._city= city;
        else throw "Incorrect city";
    }
    //getter and setter for state
    get state(){return this._state;}
    set state(state)
    {
        let stateRegex= RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(stateRegex.test(state))
            this._state= state;
        else throw "Incorrect State";
    }
    //getter and setter for zip
    get zip(){return this._zip;}
    set zip(zip)
    {
        let zipRegex= RegExp('^[1-9]{1}[0-9]{2}[ ]?[0-9]{3}$');
        if(zipRegex.test(zip))
            this._zip= zip;
        else throw "Incorrect zip";
    }
    //getter and setter for phoneNumber
    get phoneNumber(){return this._phoneNumber;}
    set phoneNumber(phoneNumber)
    {
        let phoneNumberRegex= RegExp('^[7-9]{1}[0-9]{9}$');
        if(phoneNumberRegex.test(phoneNumber))
            this._phoneNumber= phoneNumber;
        else throw "Incorrect phone number";   
    }
    //getter and setter for email
    get email(){return this._email;}
    set email(email)
    {
        let emailRegex= RegExp('^[a-z]{1}[a-z0-9]{2,}([._+-]?[a-z0-9]+)?[@]{1}[a-z1-9]+[.]{1}(co|net|com|gov)([.]{1}[a-z]{2,3})?$')
        if(emailRegex.test(email))
            this._email= email;
        else throw "Invalid Email";
    }
    //defining method toString()
    toString()
    {
        return "first Name: "+this.firstName+", last Name: "+this.lastName+", Address: "+ this.address+", City: "+ this.city+", State: "+this.state+", Zip: "+this.zip+", Phone Number: "+this.phoneNumber+", email: "+this.email; 
    }
    
}
let addressBookArray= new Array();

prompt= require('readline-sync');
while(true)
{
    try
    {
     let firstName= prompt.question("Please enter your firstName: ");
     if(firstName=="")
      break;
     let lastName= prompt.question("Please enter your lastName: ");
     let address= prompt.question("Please enter your Address: ");
     let city= prompt.question("Please enter your city: ");
     let state= prompt.question("Please enter your state: ");
     let zip= prompt.question("Please enter your zip: ");
     let phoneNumber= prompt.question("Please enter your phonenumber: ");
     let email = prompt.question("please enter your email: ");
     let addressBook= new AddressBook(firstName,lastName,address,city,state,zip,phoneNumber,email);
       //UC 7 Checking if details already exists in table
       if(addressBookArray.find(contacts=>contacts.firstName==addressBook.firstName && contacts.lastName==addressBook.lastName && contacts.address==addressBook.address && contacts.city==addressBook.city && contacts.state==addressBook.state && contacts.zip==addressBook.zip && contacts.phoneNumber==addressBook.phoneNumber && contacts.email==addressBook.email))
       throw "Details you are entering already exists";
   else
       addressBookArray.push(addressBook);
    console.log("\nDetails entered successfully, please enter first name to add more details else press enter");
   }
   catch(e)
    {
       console.error(e);
       console.log("Please enter input again");
    }
    
   
 

try
{ 
    //Creating object for class Address book with parameters for constructor
    let addressBookObject= new AddressBook("Abhishek","narwariya","cm","indore","mp","125 121",8570934858,"vishal.garg@capgemini.com");
    //creating array and pushing address book object inside array
    addressBookArray.push(addressBookObject);
    addressBookArray.push(new AddressBook("Mahak","Singla","Sector14","Hisar","Haryana",125001,9595959595,"mahak.singla@gmail.com"));
    addressBookArray.push(new AddressBook("Darpan","Singhal","Adampur","Hisar","Haryana","136 119","7895432343","darpan.singhal@exl.com"))
    //console.log(addressBookObject.toString());
    //printing all the details pushed in array
    console.log("\nPrinting Address book array\n")
    addressBookArray.forEach(contact=>console.log(contact.toString()));
    //Editing Details in the address book using filter and foreach
    console.log("\nEditing the array\n")
    addressBookArray.filter(contact=>contact.firstName=="Vishal"&& contact.city=="Hisar").forEach(contact=>{contact.lastName="Kumar"; contact.address="Mumbai"} );;
    addressBookArray.forEach(contact=>console.log(contact.toString()));
}
catch(e)
{
    console.error(e);
}
try
{
//Creating object for class Address book with parameters for constructor
let addressBookObject= new AddressBook("Abhishek","Narwariya","CM2","indore","mp","125 121","8570934858","abhishek@gmail.com");
console.log(addressBookObject.toString());
}
catch(e)
{
    console.error(e);
}
 //deleting details from the address book array 1st method
 let filteredArray= addressBookArray.filter(contact=>contact.firstName!="Abhishek" && contact.lastName!="Narwariya");
 console.log("\nDeleting Elements from array\n");
 //console.log(deletedArray);
 filteredArray.forEach(contact=>console.log(contact.toString()));
 //deleting details from address book array 2nd method
 for(let contact=0;contact<addressBookArray.length;contact++)
 {
     if(addressBookArray[contact].firstName=="Abhishek" && addressBookArray[contact].lastName=="Narwariya")
     {
         addressBookArray.splice(contact,1);
     }

 }
console.log("Deleting Elements from array -2nd method\n");
addressBookArray.forEach(contact=>console.log(contact.toString()));
//UC6 finding out the size of array using reduce function
let nameRegex= RegExp('^[A-Z]{1}[A-Za-z]{2,}$')
let addressBookCount= addressBookArray.reduce((count,contact)=>count= count+1,0);
console.log("UC6 Printing the count of address book contacts: "+addressBookCount);

console.log("\nUC8 Searcing for contacts in city Hisar\n")
addressBookArray.filter(contact=>contact.city.includes("Hisar")).forEach(contact=>console.log(contact.toString()));

addressBookArray.filter(contact=>contact.firstName.includes("Mahak")&& contact.state.includes("Haryana")).forEach(contact=>console.log("UC8 Searching for mahak in specific state Haryana:\n"+contact.toString()));


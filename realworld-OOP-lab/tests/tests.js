import {expect} from 'chai';
import Phone from '../src/OOP-challenge.js';



describe("Create a phone class that can make and receive calls and texts", () => {
	it("should be an object", () => {
        expect(typeof Phone).to.eql(typeof {});
   
});


     it("should be an instance of phone", () =>{
     	const samsung = new Phone('Samsung', 'Model');
        expect(samsung).to.be.an.instanceof(Phone);


});
     it("the phone type should default to 'phone'.", () =>{
       const iphone = new Phone();
       expect(iphone.type).to.eql('phone');


});
     it("the phone type and model should be properties of the phone",() =>{
     	const microsoft = new Phone();
        expect(microsoft.type).to.eql('Microsoft');
        expect(microsoft.model).to.eql('Lumia');


});
     it("should have a method called photo count that is initialized to zero", () =>{
     	expect(Phone.photo).to.eql(0);
});  

     it("should have a method that when called on, should increase photo count by 1",() =>{
     	expect(Phone.takePhoto()).to.eql(phone.photo++);
     });
});
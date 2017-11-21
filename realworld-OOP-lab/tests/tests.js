import {expect} from 'chai';
import {Iphone} from '../src/OOP-challenge.js';
import {Samsung} from '../src/OOP-challenge.js';
import {Microsoft} from '../src/OOP-challenge.js';
// import Phone from '../src/OOP-challenge.js';



describe("Create an Iphone class", () => {
	it("should be an object", () => {
		const applePhone = new Iphone();
        expect(typeof applePhone).to.eql(typeof {});
   
});


     it("should be an instance of phone", () =>{
     	const androidPhone = new Samsung('Samsung', 'S7 Edge');
        expect(androidPhone).to.be.an.instanceof(Samsung);


});
     it("the phone type should default to 'phone'.", () =>{
       const applePhone = new Iphone('Iphone','6 plus');
       expect(applePhone.type).to.eql('Iphone');


});
     it("the phone type and model should be properties of the phone",() =>{
     	const nokia = new Microsoft('Lumia', '930');
        expect(nokia.type).to.eql('Lumia');
        expect(nokia.model).to.eql('930');


});
     it("should have a method called photo count that is initialized to zero", () =>{
     	const androidPhone = new Samsung('Samsung', 'S7 Edge');
     	expect(androidPhone.photoCount).to.eql(0);
});  

     it("should have a method that when called on, should increase photo count by 1",() =>{
     	const applePhone = new Iphone('Iphone', '6 plus');
     	applePhone.takePhoto();
     	expect(applePhone.photoCount).to.eql(1);
     });
});
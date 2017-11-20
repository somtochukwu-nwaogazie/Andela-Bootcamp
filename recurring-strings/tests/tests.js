import {expect} from 'chai';
import recurringStrings from '../src/recurring-strings.js';

describe("recurringStrings", () => {
    describe("phrases", () =>{
      it('should be a string', () =>{
        expect(recurringStrings(22)).to.eql("You didn't enter in words")
      	
      });

      it('should be greater than 0', () =>{
      	expect(recurringStrings('')).to.eql("You didn't enter in words")
      

      });
      console.log();
      it('should return the number occurences of each word', () =>{
        expect(recurringStrings("hello")).to.eql({hello:1});
      });

      it('should return the number occurences of each word', () =>{
        expect(recurringStrings("olly olly in come free")).to.eql({olly:2, in:1, come:1, free:1});
      });

      it('should return the number occurences of each word', () =>{
        expect(recurringStrings("well well somto, you completed this challenge")).to.eql({well:2, 'somto,':1, you:1, completed:1, this:1, challenge:1});
      });






    });

})
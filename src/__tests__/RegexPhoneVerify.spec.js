import { validatePhone } from '../validators/validatorHelper';

describe('RegExp: PhoneNumber', function(){
    it('should validate phone number 1', function(){

        const phone = '+381658210740';
        expect(validatePhone(phone)).toBe(true);
    });
    it('should validate phone number 2', function(){

        const phone = '+1-202-555-0162';
        expect(validatePhone(phone)).toBe(true);
    });
    it('should validate phone number 3', function(){

        const phone = '0855-5079977';
        expect(validatePhone(phone)).toBe(true);
    });
    it('should validate phone number 4', function(){

        const phone = '18063-006983';
        expect(validatePhone(phone)).toBe(false);
    });
    it('should validate phone number 5', function(){

        const phone = '+das dsa 772';
        expect(validatePhone(phone)).toBe(false);
    });
    it('should validate phone number 6', function(){

        const phone = '202-555555555555555555555555555555555555555555555555555555555-0172';
        expect(validatePhone(phone)).toBe(false);
    });
    it('should validate phone number 7', function(){

        const phone = '(497777) 658-3018';
        expect(validatePhone(phone)).toBe(true);
    });
    it('should validate phone number 8', function(){

        const phone = '048993-4880';
        expect(validatePhone(phone)).toBe(true);
    });
    it('should validate phone number 9', function(){

        const phone = '613-773-6252';
        expect(validatePhone(phone)).toBe(true);
    });
    it('should validate phone number 10', function(){

        const phone = '000-000-000';
        expect(validatePhone(phone)).toBe(false);
    });
});

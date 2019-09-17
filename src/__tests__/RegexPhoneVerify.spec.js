import { validatePhone } from '../validators/validatorHelper';

describe('RegExp: PhoneNumber', function(){
    it('should validate phone number 1', function(){

        const phone = '(577) 288-8001';
        expect(validatePhone(phone)).toBe(true);
    });
    it('should validate phone number 2', function(){

        const phone = '+1-202-555-0162';
        expect(validatePhone(phone)).toBe(true);
    });
    it('should validate phone number 3', function(){

        const phone = '+1-202-575-0122';
        expect(validatePhone(phone)).toBe(true);
    });
    it('should validate phone number 4', function(){

        const phone = '+1-202-5n5-0122';
        expect(validatePhone(phone)).toBe(false);
    });
    it('should validate phone number 5', function(){

        const phone = '+das dsa 772';
        expect(validatePhone(phone)).toBe(false);
    });
    it('should validate phone number 6', function(){

        const phone = '202-555-0172';
        expect(validatePhone(phone)).toBe(true);
    });
    it('should validate phone number 7', function(){

        const phone = '(497) 658-3018';
        expect(validatePhone(phone)).toBe(true);
    });
    it('should validate phone number 8', function(){

        const phone = '+1-202-555-0191';
        expect(validatePhone(phone)).toBe(true);
    });
});

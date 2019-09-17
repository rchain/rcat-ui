import { validatePhone } from '../validators/validatorHelper';

describe('RegExp: PhoneNumber', function(){
    it('should validate phone number 1', function(){

        const phone = '+381628210400';
        expect(validatePhone(phone)).toBe(true);
    });
    it('should validate phone number 3', function(){

        const phone = '+1-202-575-0122';
        expect(validatePhone(phone)).toBe(true);
    });
    it('should validate phone number 2', function(){

        const phone = '+1-202-5n5-0122';
        expect(validatePhone(phone)).toBe(false);
    });
    it('should validate phone number 2', function(){

        const phone = '+das dsa 772';
        expect(validatePhone(phone)).toBe(false);
    });
});

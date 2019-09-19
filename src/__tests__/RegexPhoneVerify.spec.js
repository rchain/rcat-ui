import { validatePhone } from '../validators/validatorHelper';

describe('RegExp: PhoneNumber', function(){
    it('should validate phone number Serbia', function(){

        const phone = '+381658210740';
        expect(validatePhone(phone)).toBe(true);
    });
    it('should validate phone number UK', function(){

        const phone = '+447712345678';
        expect(validatePhone(phone)).toBe(true);
    });
    it('should validate phone number US', function(){

        const phone = '+1-541-754-3010';
        expect(validatePhone(phone)).toBe(true);
    });
    it('should validate phone number Canada', function(){

        const phone = '+1 604 555 5555';
        expect(validatePhone(phone)).toBe(true);
    });
    it('should validate phone number Chile', function(){

        const phone = '+56-955-551-102';
        expect(validatePhone(phone)).toBe(true);
    });

    it('should validate phone number Australia', function(){

        const phone = '+61-455-5788-19';
        expect(validatePhone(phone)).toBe(true);
    });
    it('should validate phone number 8', function(){

        const phone = '+385-915-5527-31';
        expect(validatePhone(phone)).toBe(true);
    });
    it('should validate phone number France', function(){

        const phone = '+33-735-5588-53';
        expect(validatePhone(phone)).toBe(true);
    });
    it('should validate phone number 10', function(){

        const phone = '000-000-000';
        expect(validatePhone(phone)).toBe(false);
    });
    it('should validate phone number 12', function(){

        const phone = '123456';
        expect(validatePhone(phone)).toBe(false);
    });
    it('should validate phone number 13', function(){

        const phone = '+33-735-5ng8-53';
        expect(validatePhone(phone)).toBe(false);
    });
});

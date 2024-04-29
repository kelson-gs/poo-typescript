export class Address {
    constructor(
        private address: string,
        private zipcode: string,
        private number?: number
    ) {}

    public setAddress(address: string): void {
        this.address = address;
    }

    public getAddress(): string {
        return this.address;
    }

    public setZipCode(zipCode: string): void {
        this.zipcode = zipCode
    }

    public getZipCode(): string {
        return this.zipcode.replace(/\D/g, '');
    }
}

const address1 = new Address('Rua x', '453213535', 111);
address1.setAddress('Rua ss');
console.log(address1.getAddress());
address1.setZipCode('5132135-52002');
console.log(address1.getZipCode());
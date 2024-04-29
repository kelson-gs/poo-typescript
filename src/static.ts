export class Address {
    
    private address: string;
    private zipcode: string;
    private number?: number;
    private static defaultCepValidaton = 7500000000;

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

    public static isCepValid(zipcode: string): boolean {
        return parseInt(zipcode.replace(/\D/g, '')) > Address.defaultCepValidaton;
    }
}



class Address {
    constructor(
        public address: string,
        public zipcode: string,
        public number?: number 
    ) {}
}

export class User {
    name: string
    email: string
    active: boolean = false
    address: Address[] = []

    constructor(name: string, email: string,active: boolean = false) {
        this.name = name
        this.email = email
        this.active = active
    }

    addAddress(newAddress: Address): void {
        this.address.push(newAddress);
    }

    getAddress(): Address[] {
        return this.address
    }
}

const address1 = new Address('Rua x', '45700000', 2);
const user1 = new User('user1', 'user1@email.com');

user1.addAddress(address1);

console.log(user1);


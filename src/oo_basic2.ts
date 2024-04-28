class Address {
    constructor(
        // quando definimos os atributos como public, podemos acessar elas quando atribuídas em conjunto a outra classe.
        public address: string,
        public zipcode: string,
        public number?: number 
    ) {}
}

export class User {
    name: string
    email: string
    active: boolean = false
    address: Address

    constructor(name: string, email: string, address: Address,active: boolean = false) {
        this.name = name
        this.email = email
        this.address = address
        this.active = active
    }
}

const address1 = new Address('Rua x', '45700000', 2);
const user1 = new User('user1', 'user1@email.com', address1, true);

console.log(user1);
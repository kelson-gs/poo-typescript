
export class User {
    private name: string //public | protected | private
    private email: string
    private active: boolean = false
    private address: Address[] = []

    constructor(name: string, email: string,active: boolean = false) {
        this.name = name
        this.email = email
        this.active = active
    }

    public addAddress(newAddress: Address): void {
        this.address.push(newAddress);
    }

    public changeName(newName: string): void {
        if(newName.length < 3) {
            throw new Error('invalid name');
        }
        
        this.name = newName;
    }

    public getName():string {
        return this.name;
    }
}

const user1 = new User('user1', 'user1@email.com');
user1.changeName('New name');
console.log(user1.getName());

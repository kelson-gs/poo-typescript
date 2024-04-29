
// Se o atributo estiver como private, eu só posso acessar ele enquanto estiver dentro da classe;
// Se o atributo estiver como protected, eu consigo acessar ele quando extendido/herdado por outra classe;
// Se o atributo estiver como public, eu consigo acessar ele em qualquer modo;

export class User {
    protected name: string 
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

    public getNumber(): number {
        return 123
    }
}

// se as propriedades do manager é idêntico ou bem parecido ao user, eu extendo para utilizar os mesmo parametros dele.
class Manager extends User {
    public getName(): string {
        return `Manager: ${this.name}`
    }

    public getNumber(): number {
        return 321
    }
}

class Admin extends User{
    public getName(): string {
        return `Admin: ${this.name}`
    }

    public getNumber(): number {
        return 123555
    }
}

const manager1 = new Manager('Manager1','manager@gmail.com');

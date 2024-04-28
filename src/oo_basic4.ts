class Address {
    constructor(
        // O readonly faz o com que travamos o atributo para que ele não possa receber alterações
        public address: string,
        public readonly zipcode: string,
        public number?: number 
    ) {}
}

const address1 = new Address('Rua x', '751231210', 5);
//address1.zipcode = '13552220'

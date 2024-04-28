class User {
    name: string
    email: string
    active: boolean = false

    constructor(name: string, email: string, active: boolean = false) {
        this.name = name
        this.email = email
        this.active = active
    }
}

const Carlos = new User('Carlos', 'carlos@email.com')
const user2 = new User('User2', 'user2@email.com', true)

console.log({
    use1: Carlos,
    user2: user2
})
